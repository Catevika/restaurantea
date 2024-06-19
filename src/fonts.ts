import localFont from 'next/font/local';

export const cormorantInfant = localFont({
  src: [
    {
      path: './CormorantInfant/CormorantInfant-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: './CormorantInfant/CormorantInfant-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './CormorantInfant/CormorantInfant-Bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  display: 'swap'
});

export const josefinSans = localFont({
  src: [
    {
      path: './JosefinSans/JosefinSans-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: './JosefinSans/JosefinSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './JosefinSans/JosefinSans-Bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  display: 'swap'
});