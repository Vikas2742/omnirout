export interface OpenApiEndpoint {
  /** Path template — may contain `{param}` placeholders. */
  path: string;
  /** HTTP method in upper case (GET / POST / PUT / DELETE / PATCH / ...). */
  method: string;
  /** Short one-line summary from the spec. */
  summary: string;
  /** Long-form description (markdown is allowed). */
  description: string;
  /** Primary tag — used for sidebar grouping in the Api Explorer. */
  tag: string;
  /** All tags declared on the operation. */
  tags: string[];
  /** `true` when the operation declares a non-empty `security` array. */
  requiresAuth: boolean;
  /** `true` when the operation declares a `requestBody`. */
  hasRequestBody: boolean;
}
