type ValidationCallback = (valid: boolean) => void

export interface Form {
  resetFields: () => void;
  validate: (cb: ValidationCallback) => void;
}