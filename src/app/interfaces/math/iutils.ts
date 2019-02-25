export interface IPoint {
    x: number;
    y: number;
    z?: number;
}
export interface ICircle {
    r: number;
    d?: number;
}
export interface IRectangle {
    w: number;
    h: number;
}
export interface ITriangle {
    adjacent: number;
    opposite: number;
    hypotenuse: number;

    alpha?: number;
    beta?: number;
    gamma?: number;

    hA?: number;
    hB?: number;
    hC?: number;
    m?: number;
}

export interface ICirclePoint extends IPoint, ICircle { }
export interface IRectPoint extends IPoint, IRectangle { }
export interface ITriPoint extends IPoint, ITriangle { }

export interface IParticle extends IPoint {
    vx: number;
    vy: number;
    vz?: number;
}
export interface IParticlePhysics {
    mass?: number;
    bounce?: number;
    friction?: number;
    gravity?: number;
    springs?: ISpring[];
    gravitations?: IPoint[];
}

export interface ICircleParticle extends IParticle, ICircle { }
export interface ICirclePhysicalParticle extends ICircleParticle, IParticlePhysics { }
export interface IRectParticle extends IParticle, IRectangle { }
export interface IRectPhysicalParticle extends IRectParticle, IParticlePhysics { }
export interface ITriParticle extends IParticle, ITriangle { }
export interface ITriPhysicalParticle extends ITriParticle, IParticlePhysics { }

export interface IVector extends IPoint {
    angle: number;
    lenght: number;

    getX(): number;
    setX(n: number): void;
    getY(): number;
    setY(n: number): void;

    getZ?(): number;
    setZ?(n: number): void;

    getAngle(): number;
    setAngle(angle: number): void;

    getLength(): number;
    setLength(length: number): void;

    addTo(v2: number);
    subtractFrom(v2: number);
    multiplyBy(v2: number);
    divideBy(v2: number);
}
export interface ISpring {
    point: IPoint;
    k: number;
    length: number;
}

export type ITheoremPythagoras = { adjacent: number, opposite: undefined, hypotenuse: number }
                               | { adjacent: undefined, opposite: number, hypotenuse: number }
                               | { adjacent: number, opposite: number, hypotenuse: undefined };

export interface IGoldenRatio {
    main: number;
    major: number;
    minor: number;
}

export interface IRGBA {
    r: number;
    g: number;
    b: number;
    a?: number;
    rgba?: string;
}
