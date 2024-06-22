import Icon from './Icon';

export default function IconXl({ iconClass, iconSrc, iconWidth, iconHeight }: { iconClass: string, iconSrc: string, iconWidth: number, iconHeight: number; }) {
  return (
    <Icon iconClass={iconClass} src={iconSrc} alt='' width={iconWidth} height={iconHeight} />
  );
}
