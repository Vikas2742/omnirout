--- a/src/app/api/combos/duplicate/route.ts
+++ b/src/app/api/combos/duplicate/route.ts
@@ -1,4 +1,5 @@
 import { NextResponse } from "next/server";
+import { buildErrorBody } from "@omniroute/open-sse/utils/error";
 import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
 import { getCombos, createCombo } from "@/lib/db/combos";
 import { normalizeSnapshotWeights } from "@/lib/combos/snapshotWeights";
@@ -160,15 +161,10 @@ export async function POST(request: Request) {
     return NextResponse.json(comboData, { status: 201 });
   } catch (error) {
     console.error("Error duplicating auto-combo:", error);
-    return NextResponse.json(
-      {
-        error: "Failed to duplicate auto-combo",
-        details:
-          typeof error === "object" && error !== null && "message" in error
-            ? String(error.message)
-            : String(error),
-      },
-      { status: 500 }
-    );
+    const { body, status } = buildErrorBody(error, {
+      defaultMessage: "Failed to duplicate auto-combo",
+      status: 500,
+    });
+    return NextResponse.json(body, { status });
   }
 }
