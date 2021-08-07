export interface Rule {
  required?: boolean;
  message: string;
  trigger: 'blur' | 'change';
  type?: 'date' | 'array';
  min?: number;
  max?: number;
}
