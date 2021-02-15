import { StudentsGuard } from "./students/students.guard";
import { CanDeactivateGuard } from "./can-deactivate-unsaved-marks/can-deactivate.guard";

export const guards: any[] = [ StudentsGuard, CanDeactivateGuard ];
