export interface SurveyInterface {
  id?: number;
  identity_client: string;
  model_car: string;
  factors_purchasing: string;
  drive_rating: number;
  satisfaction_rating: number;
  is_deleted?: number;
  createdAt?: string;
  updatedAt?: string;
}
