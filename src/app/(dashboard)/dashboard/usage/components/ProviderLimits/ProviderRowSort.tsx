"use client";
import { useId, type ReactNode } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTranslations } from "next-intl";
export function ProviderSortContext({
  ids,
  onReorder,
  children,
}: {
  ids: string[];
  onReorder: (ids: string[]) => void;
  children: ReactNode;
}) {
  const id = useId();
  const t = useTranslations("usage");
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  const finish = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    const from = ids.indexOf(String(active.id)),
      to = ids.indexOf(String(over.id));
    if (from >= 0 && to >= 0) onReorder(arrayMove(ids, from, to));
  };
  return (
    <DndContext
      id={id}
      sensors={sensors}
      collisionDetection={closestCenter}
      accessibility={{
        screenReaderInstructions: {
          draggable: `${t("healthDrag")}: ␣ → ↑ ↓ → ␣; ${t("cancel")} (⎋)`,
        },
        announcements: {
          onDragStart: () => t("healthDrag"),
          onDragOver: () => t("healthDrag"),
          onDragEnd: () => t("healthTitle"),
          onDragCancel: () => t("healthTitle"),
        },
      }}
      onDragEnd={finish}
    >
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}
export function SortableProviderRow({
  id,
  label,
  header,
  children,
}: {
  id: string;
  label: string;
  header: ReactNode;
  children: ReactNode;
}) {
  const t = useTranslations("usage");
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });
  return (
    <section
      ref={setNodeRef}
      data-provider={id}
      data-dragging={isDragging || undefined}
      aria-label={label}
      style={{
        transform: CSS.Transform.toString(
          transform ? { ...transform, scaleX: 1, scaleY: 1 } : null
        ),
        transition,
        position: "relative",
        zIndex: isDragging ? 10 : undefined,
      }}
      className={`min-w-0 border-b border-border/70 bg-surface px-[18px] py-[14px] last:border-b-0 ${isDragging ? "cursor-grabbing rounded-xl shadow-xl ring-1 ring-border" : ""}`}
    >
      <div className="mb-[10px] flex min-w-0 flex-wrap items-center gap-2">
        <button
          ref={setActivatorNodeRef}
          type="button"
          {...attributes}
          {...listeners}
          data-drag-handle
          aria-label={t("healthDrag")}
          className="-ml-[6px] shrink-0 touch-none cursor-grab rounded px-[3px] py-[2px] text-[15px] leading-none text-text-muted focus-visible:outline-2 focus-visible:outline-primary active:cursor-grabbing"
        >
          ⠿
        </button>
        {header}
      </div>
      {children}
    </section>
  );
}
