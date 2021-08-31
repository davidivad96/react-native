export interface Location {
  latitude: number;
  longitude: number;
}

export interface Marker {
  location: Location;
  title: string;
  description: string;
}
