import { html } from "lit";

/**
 * Slotted Flat Components Story demonstrating EOxStorytelling single entry-point wrapper usage.
 * This demonstrates composing an interactive story using slotted flat components like:
 * - `<eox-storytelling-hero>`
 * - `<eox-storytelling-text>`
 * - `<eox-storytelling-tour>`
 * All nested within a single `<eox-storytelling show-nav>` wrapper.
 * Developers can reference this story to include slotted EOxStorytelling components downstream.
 */
export const FlatComponents = {
  render: () => html`
    <eox-storytelling show-nav id="flat-components-story">
      <eox-storytelling-hero
        id="hero-intro"
        title="Slotted Storytelling Demo"
        description="This story demonstrates the new single entry-point \`<eox-storytelling>\` wrapper with slotted flat components (including \`<eox-storytelling-hero>\`, \`<eox-storytelling-text>\`, and \`<eox-storytelling-tour>\`). The wrapper dynamically compiles the navigation bar and manages scrolling behaviors automatically!"
        background="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920"
        as="img"
        position="center"
      ></eox-storytelling-hero>

      <eox-storytelling-text
        id="intro-text"
        title="Introductory Text"
        markdown="This story demonstrates the new flat, normalized storytelling components designed for seamless alignment with the **@a2ui/ streaming protocol**. Instead of relying on nested markdown strings, these elements are individual custom elements that can be dynamically streamed and updated in real-time."
      ></eox-storytelling-text>

      <eox-storytelling-tour
        id="maptour-demo"
        position="left"
        title="Map Flight Tour"
      >
        <eox-storytelling-tour-step
          title="Step 1: Europe"
          description="In this step, we zoom into Europe with an empty map."
          .config=${{
            zoom: 4,
            center: [15, 48],
            layers: [
              {
                type: "Tile",
                properties: { id: "osm" },
                source: { type: "OSM" },
              },
            ],
          }}
        ></eox-storytelling-tour-step>

        <eox-storytelling-tour-step
          title="Step 2: Rome, Italy"
          description="We smoothly transition to Rome, Italy while preserving the OSM map layers."
          .config=${{
            zoom: 12,
            center: [12.4964, 41.9028],
            layers: [
              {
                type: "Tile",
                properties: { id: "osm" },
                source: { type: "OSM" },
              },
            ],
          }}
        ></eox-storytelling-tour-step>

        <eox-storytelling-tour-step
          title="Step 3: Paris, France"
          description="Next, we slide over to Paris, France. Watch the map position and layers seamlessly update."
          .config=${{
            zoom: 11,
            center: [2.3522, 48.8566],
            layers: [
              {
                type: "Tile",
                properties: { id: "osm" },
                source: { type: "OSM" },
              },
            ],
          }}
        ></eox-storytelling-tour-step>
      </eox-storytelling-tour>

      <eox-storytelling-text
        id="streaming-reactivity"
        title="Streaming Reactivity Example"
        markdown="Because each step exposes reactive \`.config\` and \`.description\` properties, any changes streamed down to the active step will trigger a live, animated update on the map and text without needing a full re-render of the storytelling section."
      ></eox-storytelling-text>
    </eox-storytelling>
  `,
};

export default FlatComponents;
