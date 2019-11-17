export interface Workout {
  id?: number;
  user_id: number;
  date: string;
  template_id?: number;
  total_volume: number;
  total_time: number;
}
