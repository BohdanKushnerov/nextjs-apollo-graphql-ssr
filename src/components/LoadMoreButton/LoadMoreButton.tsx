import React, { FC, useActionState } from "react";
import styles from "./LoadMoreButton.module.scss";

interface LoadMoreButtonProps {
  title: string;
  loadMore: () => Promise<void>;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ title, loadMore }) => {
  const [_, formAction, isPending] = useActionState(async () => {
    try {
      await loadMore();
    } catch (error) {
      console.error(`Error onClick ${title}`, error);
    }
  }, null);

  return (
    <form className={styles.form} action={formAction}>
      <button className={styles.button} type="submit">
        {isPending ? "Loading..." : title}
      </button>
    </form>
  );
};

export default LoadMoreButton;
