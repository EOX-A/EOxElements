import { Mat3 } from "../math/Mat3";
export declare function getEccentricAnomaly(M: number, ecc: number): number;
export declare function getEllipticalEccentricAnomaly(meanAnomaly: number, eccentricity: number): number;
export declare function getTrueAnomaly(eccentricAnomaly: number, eccentricity: number): number;
export declare function getPerifocalToCartesianMatrix(argumentOfPeriapsis: number, inclination: number, rightAscension: number): Mat3;
