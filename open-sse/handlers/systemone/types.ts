export interface SystemOneCredentials {
  apiKey?: string | null;
  accessToken?: string | null;
  connectionId?: string | null;
  providerSpecificData?: Record<string, unknown> | null;
  allExpired?: boolean;
}
export interface SystemOneInput {
  state: unknown;
  questions: Record<string, unknown>;
}
export interface SystemOneResult {
  model: string;
  answers: Record<string, unknown>;
  usage: { input_tokens: number; output_tokens: number };
}
export interface SystemOneError {
  status: number;
  error_type: string;
  message: string;
  retryAfter?: string;
}
export interface SystemOneAdapter {
  buildRequest: (
    model: string,
    input: SystemOneInput,
    credentials: SystemOneCredentials
  ) => {
    url: string;
    headers: Record<string, string>;
    body: Record<string, unknown>;
  };
  normalizeSuccess: (body: unknown) => SystemOneResult;
  normalizeError: (status: number, body: unknown, headers: Headers) => SystemOneError;
}
