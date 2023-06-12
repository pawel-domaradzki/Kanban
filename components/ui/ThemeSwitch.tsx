"use client";

import * as Switch from "@radix-ui/react-switch";
import { DarkIcon, LightIcon } from "../icons";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import styles from "@/styles/components/ui/ThemeSwitch.module.scss";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.ThemeSwitch}>
      <LightIcon className={styles.IconLight} />
      <Switch.Root
        className={styles.SwitchRoot}
        checked={resolvedTheme === "dark"}
        onCheckedChange={() =>
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
        }
      >
        {mounted && <Switch.Thumb className={styles.SwitchThumb} />}
      </Switch.Root>
      <DarkIcon className={styles.IconDark} />
    </div>
  );
};

export default ThemeSwitch;
