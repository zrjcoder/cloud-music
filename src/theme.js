export const graphsTheme = {
  global: {
    colors: {
      background: '#ffffff',
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: `
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }
      `,
    },
    size: {
      avatar: '45px',
      meter: '180px',
      meterMedium: '260px',
      xxsmallToxsmall: '64px',
      xxxsmall: '24px',
    },
  },
  diagram: {
    extend:
      '@keyframes example { to { stroke-dashoffset: 0; } } path { stroke-dasharray: 500; stroke-dashoffset: 500; animation: example 2s linear forwards; }',
  },
  meter: {
    color: '#9060EB',
    extend:
      '@keyframes example2 { from { stroke-dashoffset: -400; } to { stroke-dashoffset: 0; } } path { stroke-dasharray: 500; stroke-dashoffset: 1000; animation: example2 1s linear forwards; }',
  },
};
