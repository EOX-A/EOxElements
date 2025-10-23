// typedoc-plugin-merge-packages.mjs

import * as TypeDoc from "typedoc";

/**
 * The package directory to target.
 * @type {string}
 */
const PACKAGE_DIR = "elements";

/**
 * Manually creates the "Classes", "Functions", "Variables" etc.
 * groups for a reflection.
 * @param {import('typedoc').DeclarationReflection[]} allChildren
 * @returns {import('typedoc').ReflectionGroup[]}
 */
function createReflectionGroups(allChildren) {
  const groups = [];
  const groupMap = {
    [TypeDoc.ReflectionKind.Class]: "Classes",
    [TypeDoc.ReflectionKind.Interface]: "Interfaces",
    [TypeDoc.ReflectionKind.Enum]: "Enums",
    [TypeDoc.ReflectionKind.Function]: "Functions",
    [TypeDoc.ReflectionKind.Variable]: "Variables",
    [TypeDoc.ReflectionKind.TypeAlias]: "Type Aliases",
    [TypeDoc.ReflectionKind.Accessor]: "Accessors",
  };

  /** @type {Map<string, import('typedoc').DeclarationReflection[]>} */
  const groupedChildren = new Map();

  for (const child of allChildren) {
    // Only include exported children
    if (!child.flags.isExported) {
      continue;
    }
    const title = groupMap[child.kind];
    if (title) {
      if (!groupedChildren.has(title)) {
        groupedChildren.set(title, []);
      }
      groupedChildren.get(title).push(child);
    }
  }

  for (const [title, children] of groupedChildren.entries()) {
    // This sort handles sorting *within* a group (e.g., all Functions)
    children.sort((a, b) => a.name.localeCompare(b.name));
    groups.push(new TypeDoc.ReflectionGroup(title, children));
  }

  // This sort handles the order of the groups themselves
  groups.sort((a, b) => a.title.localeCompare(b.title));
  return groups;
}

/**
 * The load function for the TypeDoc plugin.
 * @param {import('typedoc').Application} app The TypeDoc application.
 */
export function load(app) {
  app.converter.on(TypeDoc.Converter.EVENT_RESOLVE_END, (context) => {
    const project = context.project;

    /** @type {Map<string, import('typedoc').DeclarationReflection[]>} */
    const modulesToGroup = new Set();
    /** @type {Map<string, import('typedoc').DeclarationReflection>} */
    const newPackageMap = new Map();

    // 1. Find all modules to group and create new package reflections
    project
      .getReflectionsByKind(TypeDoc.ReflectionKind.Module)
      .forEach((moduleReflection) => {
        if (
          !moduleReflection.sources ||
          moduleReflection.sources.length === 0
        ) {
          return;
        }

        const fileName = moduleReflection.sources[0].fileName;
        const normalizedPath = fileName.replace(/\\/g, "/");
        const pathSegments = normalizedPath.split(PACKAGE_DIR + "/");

        if (pathSegments.length < 2) {
          return;
        }

        const relativePath = pathSegments[1];
        const packageName = relativePath.split("/")[0];

        if (packageName) {
          modulesToGroup.add(moduleReflection);

          let packageReflection = newPackageMap.get(packageName);
          if (!packageReflection) {
            const packageReflectionName = `${PACKAGE_DIR}/${packageName}`;
            packageReflection = new TypeDoc.DeclarationReflection(
              packageReflectionName,
              TypeDoc.ReflectionKind.Module,
              project,
            );
            packageReflection.setFlag(TypeDoc.ReflectionFlags.Exported, true);
            packageReflection.hasOwnDocument = true;

            newPackageMap.set(packageName, packageReflection);
            project.addChild(packageReflection);
          }

          const childrenToMove = moduleReflection.children || [];
          for (const child of childrenToMove) {
            child.parent = packageReflection;
            packageReflection.children = packageReflection.children || [];
            packageReflection.children.push(child);
          }

          moduleReflection.children = [];
          moduleReflection.setFlag(TypeDoc.ReflectionFlags.Exported, false);
          moduleReflection.hasOwnDocument = false;
        }
      });

    if (newPackageMap.size === 0) {
      app.logger.info(
        `[MergePackagesPlugin] No modules found under './${PACKAGE_DIR}/' to merge.`,
      );
      return;
    }

    app.logger.info(
      `[MergePackagesPlugin] Merged ${modulesToGroup.size} file modules into ${newPackageMap.size} packages.`,
    );

    // 2. Post-process new packages: sort children and create groups
    for (const packageReflection of newPackageMap.values()) {
      if (packageReflection.children) {
        // --- THIS IS THE FIX ---
        // Sort the entire list of children alphabetically by name
        packageReflection.children.sort((a, b) => a.name.localeCompare(b.name));
        // --- END FIX ---

        // Now that the list is sorted, create the groups
        packageReflection.groups = createReflectionGroups(
          packageReflection.children,
        );
      }
    }

    // 3. Re-sort the project's children
    if (project.children) {
      project.children.sort((a, b) => a.name.localeCompare(b.name));
    }

    app.logger.info(`[MergePackagesPlugin] Project reflections updated.`);
  });
}
