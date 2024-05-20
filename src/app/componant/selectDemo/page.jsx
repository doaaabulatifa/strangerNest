import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import styles from './styles.module.css'; // Adjust the path as needed

const SelectDemo = ({ defaultValue }) => (
  <Select.Root defaultValue={defaultValue}>
    <Select.Trigger className={styles.SelectTrigger} aria-label="Location">
      <Select.Value placeholder="Select a city…" />
      <Select.Icon className={styles.SelectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={styles.SelectContent}>
        <Select.ScrollUpButton className={styles.SelectScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={styles.SelectViewport}>
          <Select.Group>
            <Select.Label className={styles.SelectLabel}>Cities</Select.Label>
            <SelectItem value="norwich">Norwich</SelectItem>
            <SelectItem value="hull">Hull</SelectItem>
            <SelectItem value="nottingham">Nottingham</SelectItem>
            <SelectItem value="bristol">Bristol</SelectItem>
            <SelectItem value="birmingham">Birmingham</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={styles.SelectScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Select.Item className={classnames(styles.SelectItem, className)} {...props} ref={forwardedRef}>
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator className={styles.SelectItemIndicator}>
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
));

export default SelectDemo;
