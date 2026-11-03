import { Extent } from "../../Extent";
import { Planet } from "../../scene/Planet";
import { LonLat } from "../../LonLat";
import { Entity } from "../../entity/Entity";
import { EntityCollection } from "../../entity/EntityCollection";
import { EntityCollectionNode } from "../EntityCollectionNode";
import type { NodesDict } from "../EntityCollectionNode";
import { EquiEntityCollectionsTreeStrategy } from "./EquiEntityCollectionsTreeStrategy";
export declare class EquiEntityCollectionNodeLonLat extends EntityCollectionNode {
    strategy: EquiEntityCollectionsTreeStrategy;
    constructor(strategy: EquiEntityCollectionsTreeStrategy, partId: number, parent: EquiEntityCollectionNodeLonLat | null, extent: Extent, planet: Planet, zoom: number);
    createChildNodes(): void;
    protected _setExtentBounds(): void;
    __setLonLat__(entity: Entity): LonLat;
    isVisible(): boolean;
    isInside(entity: Entity): boolean;
    renderCollection(outArr: EntityCollection[], visibleNodes: NodesDict, renderingNode: number): void;
}
