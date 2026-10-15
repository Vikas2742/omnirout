/** Exact TypeSafe SDK aliases; adjacent management paths are deliberately excluded. */
export function canonicalSystemOneSdkPath(pathname: string): string | null {
  const path = pathname.toLowerCase().replace(/\/$/, "");
  if (["/typesafe/v1/systemone", "/api/typesafe/v1/systemone"].includes(path))
    return "/v1/systemone";
  if (["/typesafe/v1/models", "/api/typesafe/v1/models"].includes(path)) return "/v1/models";
  return null;
}
