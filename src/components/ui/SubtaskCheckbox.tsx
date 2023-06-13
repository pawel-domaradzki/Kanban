"use client";

import React, { FC } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "../icons";
import styles from "@/styles/components/ui/SubtaskCheckbox.module.scss";

const SubtaskCheckbox: FC = () => {
  return (
    <div className={styles.SubtaskCheckbox}>
      <Checkbox.Root className={styles.CheckboxRoot} id="c1">
        <Checkbox.Indicator className={styles.CheckboxIndicator}>
          <CheckIcon className={styles.CheckIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={styles.Label} htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  );
};

export default SubtaskCheckbox;
