"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

interface ICourseEnrollButton {
  course: string;
  price: number;
}

export const CourseEnrollButton = ({ course, price }: ICourseEnrollButton) => {
  return (
    <Button size="sm" className="w-full md:w-auto">
      Enroll for {formatPrice(price)}
    </Button>
  );
};
