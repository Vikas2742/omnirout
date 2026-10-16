import { saveCallLog } from "@/lib/usageDb";

export function saveImageSuccessResult({
  provider,
  model,
  startTime,
  requestBody = null,
  responseBody = null,
  created = null,
  images,
  path = "/v1/images/generations",
}) {
  saveCallLog({
    method: "POST",
    path,
    status: 200,
    model: `${provider}/${model}`,
    provider,
    duration: Date.now() - startTime,
    requestBody,
    responseBody,
  }).catch(() => {});

  return {
    success: true,
    data: {
      created: created || Math.floor(Date.now() / 1000),
      data: images,
    },
  };
}
