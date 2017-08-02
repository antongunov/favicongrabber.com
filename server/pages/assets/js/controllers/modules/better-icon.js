/**
 * Choose a better icon.
 */

const optimalWidth = 100;
const maxWidth = 1920;

module.exports = (icons) => {
  if (!(icons.length > 0)) return null;

  let bestIcon = icons[0];
  bestIcon.q = 0;

  icons.forEach((icon) => {
    icon.q = estimateQuality(icon);
    if (icon.q > bestIcon.q) {
      bestIcon = icon;
    }
  });

  return bestIcon;
};

/**
 * Estimate the quality of a favicon image.
 */

const estimateQuality = (icon) => {
  const size_q = estimateSize(icon);
  const rel_q = estimateRel(icon);
  const ext_q = estimateExt(icon);

  return ((maxWidth - size_q) << (2 + 1)) + (rel_q << 1) + ext_q;
};

/**
 * Estimate the size of a favicon image.
 */

const estimateSize = (icon) => {
  let size_q = maxWidth;

  if (icon.sizes) {
    if (/any/i.test(icon.sizes)) {
      // this icon is scalable
      size_q = optimalWidth;
    } else {
      const sizes = icon.sizes.match(/^(\d+)x/i);
      if (sizes) {
        const width = parseInt(sizes[1], 10);
        size_q = Math.abs(optimalWidth - width);
      }
    }
  } else {
    const sizes = icon.src.match(/(\d+)x(\d+)/i);
    if (sizes) {
      const width = parseInt(sizes[1], 10);
      size_q = Math.abs(optimalWidth - width);
    }
  }

  return size_q;
};

/**
 * Estimate the `rel` attribute of a link tag.
 */

const estimateRel = (icon) => {
  let rel_q = 0;

  if (/fluid[-_]?icon/i.test(icon.src)) {
    rel_q = 3;
  } else if(/apple[-_]+(?:touch[-_]+)?icon/i.test(icon.src)) {
    rel_q = 2;
  } else if(/mask[-_]?icon/i.test(icon.src)) {
    rel_q = 1;
  }

  return rel_q;
};

/**
 * Estimate the extension of a favicon image.
 */

const estimateExt = (icon) => {
  let ext_q = 0;

  switch (extension(icon.src)) {
    case 'png':
      ext_q = 2;
      break;
    case 'svg':
      ext_q = 1;
      break;
  }

  return ext_q;
};

/**
 * Extract the extension from a URL.
 */

const extension = (url) => {
  const match = url.match(/\.(\w+)$/);
  return match ? match[1] : null;
};
