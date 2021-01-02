export type Project = {
  id: string;
  name: string;
  strokes: Stroke[];
  image: string;
};

type Stroke = {
  point: Point[];
};

type Point = {
  x: number;
  y: number;
};
