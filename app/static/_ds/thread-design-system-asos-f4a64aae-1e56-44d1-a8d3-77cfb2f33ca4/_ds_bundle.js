/* @ds-bundle: {"format":4,"namespace":"ThreadDesignSystemASOS_f4a64a","components":[{"name":"BagItemCard","sourcePath":"components/commerce/BagItemCard.jsx"},{"name":"DetailCard","sourcePath":"components/commerce/DetailCard.jsx"},{"name":"ExchangeReturnItem","sourcePath":"components/commerce/ExchangeReturnItem.jsx"},{"name":"OrderCard","sourcePath":"components/commerce/OrderCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"ReturnCard","sourcePath":"components/commerce/ReturnCard.jsx"},{"name":"SummaryCard","sourcePath":"components/commerce/SummaryCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"SectionMessage","sourcePath":"components/feedback/SectionMessage.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"StatusBar","sourcePath":"components/feedback/StatusBar.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"InputField","sourcePath":"components/forms/InputField.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SaveButton","sourcePath":"components/forms/SaveButton.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SocialButton","sourcePath":"components/forms/SocialButton.jsx"},{"name":"Tag","sourcePath":"components/forms/Tag.jsx"},{"name":"Accordion","sourcePath":"components/layout/Accordion.jsx"},{"name":"CTAFooter","sourcePath":"components/layout/CTAFooter.jsx"},{"name":"ListRange","sourcePath":"components/layout/ListRange.jsx"},{"name":"PromoBanner","sourcePath":"components/layout/PromoBanner.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"ActionBar","sourcePath":"components/navigation/ActionBar.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"MyAccountNavigation","sourcePath":"components/navigation/MyAccountNavigation.jsx"},{"name":"PageTitle","sourcePath":"components/navigation/PageTitle.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"Sheet","sourcePath":"components/overlay/Sheet.jsx"}],"sourceHashes":{"components/commerce/BagItemCard.jsx":"ab66194b79cc","components/commerce/DetailCard.jsx":"83eae393a766","components/commerce/ExchangeReturnItem.jsx":"d213fbe221bd","components/commerce/OrderCard.jsx":"bed14fedc66f","components/commerce/ProductCard.jsx":"b679e912d82f","components/commerce/ReturnCard.jsx":"ec06ffb61c5b","components/commerce/SummaryCard.jsx":"dc385dc53028","components/feedback/Alert.jsx":"8bc2312540e8","components/feedback/SectionMessage.jsx":"accba3b8ad01","components/feedback/Snackbar.jsx":"8d2b8243a89f","components/feedback/Spinner.jsx":"49379fbfe84e","components/feedback/StatusBadge.jsx":"6855c0c323a2","components/feedback/StatusBar.jsx":"5fc24a310a26","components/forms/Button.jsx":"a0bf2f1b0986","components/forms/Checkbox.jsx":"a3cbd8dbddee","components/forms/IconButton.jsx":"084b126757a1","components/forms/InputField.jsx":"09225c3e8402","components/forms/Radio.jsx":"e152792c4e79","components/forms/SaveButton.jsx":"ac0112d7d676","components/forms/Select.jsx":"6c2def401784","components/forms/SocialButton.jsx":"7c958bbafe0f","components/forms/Tag.jsx":"80141baf0949","components/layout/Accordion.jsx":"4bf92045b2e2","components/layout/CTAFooter.jsx":"c77c9fb0edf5","components/layout/ListRange.jsx":"8705a6b287ad","components/layout/PromoBanner.jsx":"c864f9f02272","components/media/Icon.jsx":"c1324462ed76","components/navigation/ActionBar.jsx":"c385d3dab1b4","components/navigation/Header.jsx":"99a34b8eb888","components/navigation/MyAccountNavigation.jsx":"0f454562c940","components/navigation/PageTitle.jsx":"c722509a07b9","components/navigation/TabBar.jsx":"8c8808fe61b1","components/overlay/Modal.jsx":"d3d7863486d3","components/overlay/Sheet.jsx":"a8809b5d3369","ui_kits/asos-account/AccountApp.jsx":"12df12cae00e","ui_kits/asos-account/data.js":"ad2592bc8d78","ui_kits/asos-returns/ReturnsApp.jsx":"494490725f01","ui_kits/asos-web/App.jsx":"f16fdcddbbd3","ui_kits/asos-web/Bag.jsx":"71452e07e9da","ui_kits/asos-web/PDP.jsx":"12177e57e3d7","ui_kits/asos-web/PLP.jsx":"0bfc7685c6b5","ui_kits/asos-web/data.js":"6e50ac4f2587"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ThreadDesignSystemASOS_f4a64a = window.ThreadDesignSystemASOS_f4a64a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/SummaryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Summary Card — the key/value totals block.
 * Figma: `card/checkout/total`, `card/exchange.return/summary/total`,
 * `card/exchange.return/summary/one.parcel`.
 */
function SummaryCard({
  title,
  rows = [],
  total,
  totalLabel = "Total",
  footnote,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-small)",
      width: "100%",
      padding: "var(--gap-large)",
      background: "var(--surface-base-raised)",
      border: "var(--border-width-hairline) solid var(--border-base-subtle)",
      borderRadius: "var(--shape-corner-radius-small)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 var(--gap-x-small)",
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)",
      color: "var(--text-base-primary)"
    }
  }, title), rows.map(([label, value, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--gap-medium)",
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: tone === "accent" ? "var(--text-decision-success)" : "var(--text-base-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, value))), total != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--gap-medium)",
      marginTop: "var(--gap-small)",
      paddingTop: "var(--gap-medium)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)",
      color: "var(--text-base-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, totalLabel), /*#__PURE__*/React.createElement("span", null, total)), children, footnote && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--gap-x-small) 0 0",
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, footnote));
}
Object.assign(__ds_scope, { SummaryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SummaryCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  inline: 16,
  small: 20,
  medium: 32,
  large: 48
};

/** Thread DS Loading Spinner — standard (ring) or branded (dual-tone) spinner. */
function Spinner({
  size = "medium",
  branded = false,
  label = "Loading",
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.medium;
  const stroke = Math.max(2, Math.round(px / 10));
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    style: {
      display: "inline-flex",
      width: px,
      height: px,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: "50%",
      border: `${stroke}px solid ${branded ? "var(--surface-action-accent-primary)" : "var(--border-base-muted)"}`,
      borderTopColor: branded ? "var(--surface-action-primary)" : "var(--surface-action-primary)",
      opacity: branded ? 1 : 1,
      animation: "tds-spin 0.8s linear infinite",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes tds-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Status Badge — small product-tile label (New, -25%, Selling Fast,
 * Out of Stock, likes count). Overlays imagery or sits inline.
 */
const STATUS = {
  Default: {
    bg: "var(--surface-base-invert)",
    fg: "var(--text-base-on-dark)"
  },
  New: {
    bg: "var(--surface-action-accent-primary)",
    fg: "var(--text-action-accent-primary)"
  },
  Discount: {
    bg: "var(--red-600)",
    fg: "var(--text-base-on-dark-fixed)"
  },
  "Out of Stock": {
    bg: "var(--surface-decision-secondary)",
    fg: "var(--text-base-secondary)"
  },
  Likes: {
    bg: "var(--surface-base-overlay-white)",
    fg: "var(--text-base-primary)"
  }
};
function StatusBadge({
  children,
  status = "Default",
  type = "Half-Pill",
  size = "Default",
  invert = false,
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS.Default;
  const large = size === "Large";
  const radius = type === "Pill" || type === "Half-Pill" || type === "Social Half-Pill" ? "var(--shape-corner-radius-full)" : "var(--shape-corner-radius-x-small)";
  const halfPill = type === "Half-Pill" || type === "Social Half-Pill";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gap-x-small)",
      padding: large ? "4px 10px" : "3px 8px",
      background: invert ? "var(--surface-base-white-fixed)" : s.bg,
      color: invert ? "var(--text-base-primary)" : s.fg,
      borderRadius: radius,
      borderTopLeftRadius: halfPill ? 0 : radius,
      borderBottomLeftRadius: halfPill ? 0 : radius,
      font: large ? "var(--text-label-tag-large)" : "var(--text-label-status-small)",
      letterSpacing: large ? "var(--text-label-tag-large-ls)" : "var(--text-label-status-small-ls)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TYPE_STYLES = {
  Primary: {
    "--_bg": "var(--surface-action-primary)",
    "--_bgh": "var(--surface-action-primary-hover)",
    "--_fg": "var(--text-action-primary)",
    "--_bd": "var(--border-action-primary)"
  },
  Secondary: {
    "--_bg": "var(--surface-action-secondary)",
    "--_bgh": "var(--surface-action-secondary-hover)",
    "--_fg": "var(--text-action-secondary)",
    "--_bd": "var(--border-action-secondary)"
  },
  Tertiary: {
    "--_bg": "var(--surface-action-tertiary)",
    "--_bgh": "var(--surface-action-tertiary-hover)",
    "--_fg": "var(--text-action-tertiary)",
    "--_bd": "var(--border-action-tertiary)"
  },
  "Accent Primary": {
    "--_bg": "var(--surface-action-accent-primary)",
    "--_bgh": "var(--surface-action-accent-primary-hover)",
    "--_fg": "var(--text-action-accent-primary)",
    "--_bd": "var(--border-action-accent-primary)"
  },
  "Accent Secondary": {
    "--_bg": "var(--surface-action-accent-secondary)",
    "--_bgh": "var(--surface-action-accent-secondary-hover)",
    "--_fg": "var(--text-action-accent-secondary)",
    "--_bd": "var(--border-action-accent-secondary)"
  }
};
const SIZES = {
  small: {
    padding: "8px 8px",
    font: "var(--text-label-button-small)",
    ls: "var(--text-label-button-small-ls)",
    minH: 36
  },
  default: {
    padding: "12px 16px",
    font: "var(--text-label-button)",
    ls: "var(--text-label-button-ls)",
    minH: 48
  },
  large: {
    padding: "16px 16px",
    font: "var(--text-label-button)",
    ls: "var(--text-label-button-ls)",
    minH: 56
  }
};

/**
 * Thread DS Button — triggers an action (submit, add to bag, apply filter).
 * Use a real <button>. Labels render uppercase, Thread DS's CTA convention.
 */
function Button({
  type = "Primary",
  size = "default",
  pill = false,
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
  children,
  style,
  ...rest
}) {
  const t = TYPE_STYLES[type] || TYPE_STYLES.Primary;
  const s = SIZES[size] || SIZES.default;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...t,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--gap-small)",
      width: fullWidth ? "100%" : "auto",
      minHeight: s.minH,
      padding: s.padding,
      font: s.font,
      letterSpacing: s.ls,
      textTransform: "uppercase",
      color: disabled ? "var(--text-action-disabled)" : "var(--_fg)",
      background: disabled ? "var(--surface-action-disabled)" : "var(--_bg)",
      border: "var(--border-width-thin) solid",
      borderColor: disabled ? "var(--border-action-disabled)" : "var(--_bd)",
      borderRadius: pill ? "var(--shape-corner-radius-full)" : "var(--shape-corner-radius-x-small)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--motion-duration-base) var(--motion-easing-standard), border-color var(--motion-duration-base) var(--motion-easing-standard)",
      WebkitFontSmoothing: "antialiased",
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = "var(--_bgh)";
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = "var(--_bg)";
    }
  }, rest), startIcon, children, endIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
/**
 * Thread DS Input Field — text field with label, helper and error states.
 * State is derived: error > focus > default.
 */
function InputField({
  label,
  showLabel = true,
  helper,
  error,
  value,
  defaultValue,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const autoId = useId();
  const fieldId = id || autoId;
  const [focused, setFocused] = useState(false);
  const isError = !!error;
  const borderColor = isError ? "var(--border-decision-error)" : focused ? "var(--border-decision-focus)" : "var(--border-base-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-x-small)",
      width: "100%",
      ...style
    }
  }, showLabel && label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: "var(--text-label-field-input)",
      letterSpacing: "var(--text-label-field-input-ls)",
      textTransform: "uppercase",
      color: "var(--text-base-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    "aria-invalid": isError || undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      minHeight: 48,
      padding: "12px 16px",
      font: "var(--text-field-value)",
      letterSpacing: "var(--text-field-value-ls)",
      color: "var(--text-base-primary)",
      background: disabled ? "var(--surface-action-disabled)" : "var(--surface-base-raised)",
      border: `var(--border-width-hairline) solid ${borderColor}`,
      borderRadius: "var(--shape-corner-radius-x-small)",
      /* Focus ring uses outline, not a wider border: outline is outside layout,
         so the field cannot grow past its 48px min-height on focus. */
      outline: focused && !isError ? "var(--border-width-thin) solid var(--border-decision-focus)" : "none",
      outlineOffset: "calc(-1 * var(--border-width-thin))",
      transition: "border-color var(--motion-duration-fast) var(--motion-easing-standard)"
    }
  }, rest)), isError ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-field-helper-error)",
      letterSpacing: "var(--text-field-helper-error-ls)",
      color: "var(--text-decision-error)"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-field-helper)",
      letterSpacing: "var(--text-field-helper-ls)",
      color: "var(--text-base-secondary)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { InputField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
/** Thread DS Radio — single-choice control with optional label. */
function Radio({
  label,
  checked = false,
  disabled = false,
  name,
  value,
  onChange,
  id,
  style,
  ...rest
}) {
  const autoId = useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gap-small)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "0 0 auto",
      borderRadius: "var(--shape-corner-radius-full)",
      background: "var(--surface-base-raised)",
      border: "var(--border-width-thin) solid",
      borderColor: checked ? "var(--border-action-primary)" : "var(--border-base-default)",
      transition: "border-color var(--motion-duration-fast)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--shape-corner-radius-full)",
      background: "var(--surface-action-primary)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-field-option)",
      color: "var(--text-base-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SocialButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PROVIDERS = {
  Apple: {
    label: "Apple",
    mono: ""
  },
  Google: {
    label: "Google",
    mono: "G"
  },
  Facebook: {
    label: "Facebook",
    mono: "f"
  }
};

/**
 * Thread DS Social Button — third-party sign-in. Full width, outlined.
 * NOTE: the official provider wordmark/glyph is not bundled; a monogram slot
 * stands in — drop the real brand mark into `mark` for production.
 */
function SocialButton({
  provider = "Apple",
  mark,
  children,
  style,
  ...rest
}) {
  const p = PROVIDERS[provider] || PROVIDERS.Apple;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--gap-small)",
      width: "100%",
      minHeight: 48,
      padding: "12px 16px",
      background: "var(--surface-action-secondary)",
      color: "var(--text-action-secondary)",
      border: "var(--border-width-thin) solid var(--border-action-secondary)",
      borderRadius: "var(--shape-corner-radius-x-small)",
      font: "var(--text-label-button)",
      letterSpacing: "var(--text-label-button-ls)",
      cursor: "pointer",
      transition: "background var(--motion-duration-base) var(--motion-easing-standard)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--surface-action-secondary-hover)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--surface-action-secondary)";
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: 4,
      background: "var(--surface-base-invert)",
      color: "var(--text-base-on-dark)",
      font: "var(--text-headline-mini)"
    }
  }, mark || p.mono), children || `Continue with ${p.label}`);
}
Object.assign(__ds_scope, { SocialButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SocialButton.jsx", error: String((e && e.message) || e) }); }

// components/layout/CTAFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS CTA Footer — sticky bottom action bar used to close a flow
 * (exchange/return item selection, summary steps).
 * Figma: `card/exchange.return/CTA.footer`.
 */
function CTAFooter({
  summary,
  children,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: sticky ? "sticky" : "static",
      bottom: 0,
      zIndex: 20,
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-medium)",
      padding: "var(--gap-large)",
      width: "100%",
      background: "var(--surface-base-raised)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      boxShadow: "var(--shadow-light)",
      ...style
    }
  }, rest), summary && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)",
      color: "var(--text-base-primary)"
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-small)"
    }
  }, children));
}
Object.assign(__ds_scope, { CTAFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CTAFooter.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/**
 * Thread DS Icon — thin wrapper over Lucide (substitute icon set; the brand's
 * own SVG set was not present in the exported source). Consumers must load
 * Lucide once: <script src="https://unpkg.com/lucide@latest"></script>.
 * Colour inherits from the icon/* colour tokens via currentColor.
 */
function Icon({
  name,
  size = 24,
  color = "var(--icon-base-primary)",
  strokeWidth = 2,
  style,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      window.lucide.createIcons({
        nameAttr: "data-lucide",
        root: ref.current,
        attrs: {
          "stroke-width": strokeWidth,
          width: size,
          height: size
        }
      });
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color,
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": name
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/BagItemCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Bag Item Card — a line item in bag / checkout / order detail.
 * Figma: `card/checkout/bag.item`, `card/bag/exchanges/item`.
 */
function BagItemCard({
  brand,
  name,
  price,
  wasPrice,
  size,
  colour,
  qty = 1,
  tint = "var(--surface-decision-secondary)",
  image,
  onQtyChange,
  onRemove,
  readOnly = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      gap: "var(--gap-large)",
      width: "100%",
      padding: "var(--gap-large) 0",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 112,
      flex: "0 0 auto",
      background: image ? `url(${image}) center/cover` : tint
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-product-description)",
      letterSpacing: "var(--text-body-product-description-ls)",
      color: "var(--text-base-primary)"
    }
  }, brand), name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-medium)",
      marginTop: "var(--gap-x-small)",
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, size && /*#__PURE__*/React.createElement("span", null, "Size: ", size), colour && /*#__PURE__*/React.createElement("span", null, "Colour: ", colour), readOnly && /*#__PURE__*/React.createElement("span", null, "Qty: ", qty)), !readOnly && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-medium)",
      marginTop: "var(--gap-small)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "var(--border-width-hairline) solid var(--border-base-default)",
      borderRadius: "var(--shape-corner-radius-x-small)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease quantity",
    onClick: () => onQtyChange && onQtyChange(-1),
    style: {
      width: 32,
      height: 32,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--icon-base-primary)",
      font: "16px/1 var(--font-family-base)"
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 24,
      textAlign: "center",
      font: "var(--text-label-field-input)",
      letterSpacing: "var(--text-label-field-input-ls)"
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase quantity",
    onClick: () => onQtyChange && onQtyChange(1),
    style: {
      width: 32,
      height: 32,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--icon-base-primary)",
      font: "16px/1 var(--font-family-base)"
    }
  }, "+")), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gap-x-small)",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-base-secondary)",
      font: "var(--text-link)",
      letterSpacing: "var(--text-link-ls)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trash-2",
    size: 16,
    color: "currentColor"
  }), " Remove"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 2,
      flex: "0 0 auto"
    }
  }, wasPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-decision-sale)",
      textDecoration: "line-through"
    }
  }, wasPrice), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)",
      color: wasPrice ? "var(--text-decision-sale)" : "var(--text-base-primary)"
    }
  }, price)));
}
Object.assign(__ds_scope, { BagItemCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BagItemCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/DetailCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Detail Card — a titled block of read-only detail with an optional
 * change/edit action. Covers `card/checkout/delivery.address`,
 * `card/checkout/payment`, `card/order.detail/delivery.address`,
 * `card/order.detail/payment.details`, `card/order.detail/order.info`.
 */
function DetailCard({
  title,
  icon,
  lines = [],
  action = "Change",
  onAction,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-small)",
      width: "100%",
      padding: "var(--gap-large)",
      background: "var(--surface-base-raised)",
      border: "var(--border-width-hairline) solid var(--border-base-subtle)",
      borderRadius: "var(--shape-corner-radius-small)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-small)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--icon-base-primary)"
  }), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      flex: 1,
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)",
      color: "var(--text-base-primary)"
    }
  }, title), action && onAction && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-base-primary)",
      font: "var(--text-link)",
      letterSpacing: "var(--text-link-ls)",
      textDecoration: "underline"
    }
  }, action)), lines.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))), children);
}
Object.assign(__ds_scope, { DetailCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/DetailCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/OrderCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Order Card — a row in the My Orders list. Nests the delivery
 * status atom, order info and trailing CTAs.
 * Figma: `card/my.orders/item` + `_atoms/card/my.orders/delivery.status`.
 */
function OrderCard({
  orderNumber,
  date,
  total,
  status = "Delivered",
  statusTone = "Success",
  itemCount = 1,
  thumbnails = [],
  action = "View order",
  onAction,
  style,
  ...rest
}) {
  const tones = {
    Success: {
      fg: "var(--text-decision-success)",
      icon: "circle-check"
    },
    Pending: {
      fg: "var(--text-base-secondary)",
      icon: "clock"
    },
    Warning: {
      fg: "var(--text-decision-sale)",
      icon: "triangle-alert"
    }
  };
  const t = tones[statusTone] || tones.Success;
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-medium)",
      width: "100%",
      padding: "var(--gap-large)",
      background: "var(--surface-base-raised)",
      border: "var(--border-width-hairline) solid var(--border-base-subtle)",
      borderRadius: "var(--shape-corner-radius-small)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-small)",
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-status)",
      letterSpacing: "var(--text-label-status-ls)"
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--gap-x-large)"
    }
  }, [["Order", orderNumber], ["Placed", date], ["Total", total]].filter(([, v]) => v).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph-bold)",
      letterSpacing: "var(--text-body-paragraph-bold-ls)",
      color: "var(--text-base-primary)"
    }
  }, v)))), thumbnails.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-small)"
    }
  }, thumbnails.slice(0, 4).map((tint, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 48,
      height: 64,
      background: tint,
      borderRadius: 2,
      flex: "0 0 auto"
    }
  })), itemCount > 4 && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, "+", itemCount - 4, " more")), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "var(--gap-x-small)",
      paddingTop: "var(--gap-medium)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      background: "none",
      border: "none",
      borderTopStyle: "solid",
      cursor: "pointer",
      font: "var(--text-label-button-small)",
      letterSpacing: "var(--text-label-button-small-ls)",
      color: "var(--text-base-primary)"
    }
  }, action, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20,
    color: "var(--icon-base-primary)"
  })));
}
Object.assign(__ds_scope, { OrderCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/OrderCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ReturnCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Return Card — a row in the My Returns list.
 * Figma: `card/my.returns`.
 */
function ReturnCard({
  reference,
  date,
  status = "In transit",
  statusTone = "Pending",
  refund,
  itemCount,
  carrier,
  action = "Track return",
  onAction,
  style,
  ...rest
}) {
  const tones = {
    Success: {
      bg: "var(--surface-decision-success)",
      fg: "var(--text-decision-success)",
      icon: "circle-check"
    },
    Pending: {
      bg: "var(--surface-decision-neutral)",
      fg: "var(--text-decision-primary)",
      icon: "truck"
    },
    Warning: {
      bg: "var(--surface-decision-warning)",
      fg: "var(--text-decision-primary)",
      icon: "triangle-alert"
    }
  };
  const t = tones[statusTone] || tones.Pending;
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: "var(--surface-base-raised)",
      border: "var(--border-width-hairline) solid var(--border-base-subtle)",
      borderRadius: "var(--shape-corner-radius-small)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-small)",
      padding: "var(--gap-medium) var(--gap-large)",
      background: t.bg,
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-status)",
      letterSpacing: "var(--text-label-status-ls)"
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-medium)",
      padding: "var(--gap-large)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--gap-x-large)"
    }
  }, [["Return ref", reference], ["Created", date], ["Refund", refund], ["Items", itemCount], ["Carrier", carrier]].filter(([, v]) => v != null).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph-bold)",
      letterSpacing: "var(--text-body-paragraph-bold-ls)",
      color: "var(--text-base-primary)"
    }
  }, v)))), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingTop: "var(--gap-medium)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      background: "none",
      border: "none",
      borderTopStyle: "solid",
      cursor: "pointer",
      font: "var(--text-label-button-small)",
      letterSpacing: "var(--text-label-button-small-ls)",
      color: "var(--text-base-primary)"
    }
  }, action, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20,
    color: "var(--icon-base-primary)"
  }))));
}
Object.assign(__ds_scope, { ReturnCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ReturnCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TYPES = {
  Information: {
    bg: "var(--surface-decision-neutral)",
    icon: "info",
    iconColor: "var(--surface-decision-information)",
    fg: "var(--text-decision-primary)"
  },
  Success: {
    bg: "var(--surface-decision-success)",
    icon: "circle-check",
    iconColor: "var(--icon-decision-success)",
    fg: "var(--text-decision-primary)"
  },
  Warning: {
    bg: "var(--surface-decision-warning)",
    icon: "triangle-alert",
    iconColor: "var(--border-decision-warning)",
    fg: "var(--text-decision-primary)"
  },
  Error: {
    bg: "var(--surface-decision-error)",
    icon: "circle-alert",
    iconColor: "var(--icon-decision-error)",
    fg: "var(--text-decision-primary)"
  },
  System: {
    bg: "var(--surface-base-invert)",
    icon: "bell",
    iconColor: "var(--icon-base-on-dark-fixed)",
    fg: "var(--text-base-on-dark)"
  }
};

/** Thread DS Alert — inline, persistent contextual message. */
function Alert({
  type = "Information",
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  const t = TYPES[type] || TYPES.Information;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--gap-medium)",
      padding: "var(--gap-medium) var(--gap-large)",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--shape-corner-radius-small)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "0 0 auto",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.iconColor
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-headline-subsection)",
      letterSpacing: "var(--text-headline-subsection-ls)"
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      display: "inline-flex",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18,
    color: "currentColor"
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SectionMessage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Section Message — a banner-style messaging block that introduces
 * or explains a section. Larger and more editorial than an Alert.
 * Figma: `section.message/exchange.or.return`, `/exchanges`, `/have.your.say`.
 */
function SectionMessage({
  title,
  children,
  icon,
  tone = "Neutral",
  action,
  onAction,
  style,
  ...rest
}) {
  const tones = {
    Neutral: {
      bg: "var(--surface-base-elevated)",
      bd: "var(--border-base-subtle)",
      fg: "var(--text-base-primary)"
    },
    Accent: {
      bg: "var(--surface-decision-success)",
      bd: "transparent",
      fg: "var(--text-decision-primary)"
    },
    Invert: {
      bg: "var(--surface-base-invert)",
      bd: "transparent",
      fg: "var(--text-base-on-dark)"
    }
  };
  const t = tones[tone] || tones.Neutral;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--gap-large)",
      width: "100%",
      padding: "var(--gap-large)",
      background: t.bg,
      color: t.fg,
      border: `var(--border-width-hairline) solid ${t.bd}`,
      borderRadius: "var(--shape-corner-radius-small)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "currentColor",
    style: {
      flex: "0 0 auto",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-x-small)"
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)"
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      opacity: 0.9
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      alignSelf: "flex-start",
      marginTop: "var(--gap-x-small)",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      font: "var(--text-link)",
      letterSpacing: "var(--text-link-ls)",
      textDecoration: "underline"
    }
  }, action)));
}
Object.assign(__ds_scope, { SectionMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SectionMessage.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  Information: {
    icon: "info",
    color: "var(--blue-400)"
  },
  Success: {
    icon: "circle-check",
    color: "var(--green-500)"
  },
  Warning: {
    icon: "triangle-alert",
    color: "var(--amber-500)"
  },
  Error: {
    icon: "circle-alert",
    color: "var(--red-400)"
  },
  System: {
    icon: "bell",
    color: "var(--text-base-on-dark-fixed)"
  }
};

/** Thread DS Snackbar — transient confirmation. Dark bar, optional action. */
function Snackbar({
  type = "Success",
  children,
  action,
  onAction,
  style,
  ...rest
}) {
  const t = ICONS[type] || ICONS.Success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gap-medium)",
      padding: "var(--gap-medium) var(--gap-large)",
      minHeight: 48,
      background: "var(--surface-base-black-fixed)",
      color: "var(--text-base-on-dark-fixed)",
      borderRadius: "var(--shape-corner-radius-small)",
      boxShadow: "var(--shadow-medium)",
      maxWidth: 480,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.color
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)"
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-base-on-dark-fixed)",
      font: "var(--text-label-button-small)",
      letterSpacing: "var(--text-label-button-small-ls)",
      textTransform: "uppercase",
      textDecoration: "underline"
    }
  }, action));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Status Bar — order progress tracker. `stage` (1-based) marks how
 * many steps are complete; `warning` flags the current step.
 */
function StatusBar({
  steps = ["Ordered", "Dispatched", "Out for delivery", "Delivered"],
  stage = 2,
  warning = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      ...style
    }
  }, rest), steps.map((label, i) => {
    const done = i < stage;
    const isCurrent = i === stage - 1;
    const accent = warning && isCurrent ? "var(--border-decision-warning)" : "var(--surface-action-accent-primary)";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 11,
        right: "50%",
        width: "100%",
        height: 3,
        background: done ? accent : "var(--surface-decision-secondary)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        width: 24,
        height: 24,
        borderRadius: "var(--shape-corner-radius-full)",
        background: done ? accent : "var(--surface-base-raised)",
        border: done ? "none" : "var(--border-width-thin) solid var(--border-base-muted)",
        color: "var(--icon-action-accent-primary)"
      }
    }, done && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: warning && isCurrent ? "clock" : "check",
      size: 14,
      color: "var(--text-base-on-dark-fixed)",
      strokeWidth: 3
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: "var(--gap-small)",
        textAlign: "center",
        font: "var(--text-label-status-small)",
        letterSpacing: "var(--text-label-status-small-ls)",
        textTransform: "uppercase",
        color: done ? "var(--text-base-primary)" : "var(--text-base-secondary)"
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
/** Thread DS Checkbox — square (default) or rounded, with optional label. */
function Checkbox({
  label,
  checked = false,
  shape = "Square",
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const autoId = useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gap-small)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "0 0 auto",
      borderRadius: shape === "Rounded" ? "var(--shape-corner-radius-full)" : "var(--shape-corner-radius-x-small)",
      background: checked ? "var(--surface-action-primary)" : "var(--surface-base-raised)",
      border: "var(--border-width-thin) solid",
      borderColor: checked ? "var(--border-action-primary)" : "var(--border-base-default)",
      transition: "background var(--motion-duration-fast), border-color var(--motion-duration-fast)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--icon-action-primary)",
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-field-option)",
      color: "var(--text-base-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TYPES = {
  Secondary: {
    bg: "var(--surface-action-secondary)",
    bgh: "var(--surface-action-secondary-hover)",
    bd: "var(--border-action-secondary)",
    fg: "var(--icon-action-secondary)"
  },
  "Accent Secondary": {
    bg: "var(--surface-action-accent-secondary)",
    bgh: "var(--surface-action-accent-secondary-hover)",
    bd: "var(--border-action-accent-secondary)",
    fg: "var(--icon-action-accent-secondary)"
  }
};

/** Thread DS Icon Button — a square, icon-only action. Always give an aria-label. */
function IconButton({
  icon = "heart",
  type = "Secondary",
  size = 48,
  loading = false,
  disabled = false,
  "aria-label": ariaLabel,
  style,
  ...rest
}) {
  const t = TYPES[type] || TYPES.Secondary;
  const off = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    "aria-busy": loading || undefined,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      background: off ? "var(--surface-action-disabled)" : t.bg,
      border: "var(--border-width-thin) solid",
      borderColor: off ? "var(--border-action-disabled)" : t.bd,
      borderRadius: "var(--shape-corner-radius-x-small)",
      color: off ? "var(--icon-action-disabled)" : t.fg,
      cursor: off ? "not-allowed" : "pointer",
      transition: "background var(--motion-duration-base) var(--motion-easing-standard)",
      ...style
    },
    onMouseEnter: e => {
      if (!off) e.currentTarget.style.background = t.bgh;
    },
    onMouseLeave: e => {
      if (!off) e.currentTarget.style.background = t.bg;
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: loading ? "loader-circle" : icon,
    size: 24,
    color: "currentColor",
    style: loading ? {
      animation: "tds-spin 0.8s linear infinite"
    } : undefined
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes tds-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/SaveButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Save Button — wishlist heart toggle. Sibling of a product-card
 * link, never nested inside it. Include the product name in aria-label.
 */
function SaveButton({
  selected = false,
  type = "Secondary",
  size = 40,
  "aria-label": ariaLabel = "Save",
  onClick,
  style,
  ...rest
}) {
  const primary = type === "Primary";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    "aria-pressed": selected,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      background: primary ? "var(--surface-base-raised)" : "transparent",
      border: primary ? "var(--border-width-hairline) solid var(--border-base-muted)" : "none",
      borderRadius: "var(--shape-corner-radius-full)",
      color: selected ? "var(--icon-decision-error)" : "var(--icon-base-primary)",
      boxShadow: primary ? "var(--shadow-x-light)" : "none",
      cursor: "pointer",
      transition: "color var(--motion-duration-fast) var(--motion-easing-standard), transform var(--motion-duration-fast) var(--motion-easing-standard)",
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "scale(0.9)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 22,
    color: "currentColor",
    style: {
      fill: selected ? "currentColor" : "transparent",
      transition: "fill var(--motion-duration-fast)"
    }
  }));
}
Object.assign(__ds_scope, { SaveButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SaveButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Product Card — PLP / saved / carousel tile. Follows the Thread DS
 * a11y pattern: a wrapping <a> carries the full aria-label; visual text is
 * aria-hidden; the Save button is a sibling of the link, never nested inside.
 */
function ProductCard({
  name,
  brand,
  price,
  wasPrice,
  href = "#",
  image,
  colours,
  badge,
  badgeStatus = "Default",
  saved = false,
  onSave,
  style,
  ...rest
}) {
  const label = [brand, name].filter(Boolean).join(" ") + (wasPrice ? `. Was ${wasPrice}, now ${price}.` : price ? `. ${price}.` : "") + (badge ? ` ${badge}.` : "");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label,
    style: {
      display: "block",
      color: "inherit",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "var(--aspect-product)",
      background: "var(--surface-decision-secondary)",
      overflow: "hidden"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-base-secondary)",
      font: "var(--text-label-status-small)",
      letterSpacing: "var(--text-label-status-small-ls)",
      textTransform: "uppercase"
    }
  }, "Image"), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: badgeStatus
  }, badge))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      paddingTop: "var(--gap-small)"
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-product-description)",
      letterSpacing: "var(--text-body-product-description-ls)",
      color: "var(--text-base-primary)"
    }
  }, brand), name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--gap-small)",
      marginTop: 2
    }
  }, wasPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-decision-sale)",
      textDecoration: "line-through"
    }
  }, wasPrice), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph-bold)",
      letterSpacing: "var(--text-body-paragraph-bold-ls)",
      color: wasPrice ? "var(--text-decision-sale)" : "var(--text-base-primary)"
    }
  }, price)), colours != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)",
      marginTop: 2
    }
  }, colours, " colours"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SaveButton, {
    type: "Primary",
    selected: saved,
    onClick: onSave,
    "aria-label": `Save ${[brand, name].filter(Boolean).join(" ")}`
  })));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
/** Thread DS Select — native select styled to Thread DS with a chevron. */
function Select({
  label,
  showLabel = true,
  description,
  error,
  children,
  value,
  defaultValue,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const autoId = useId();
  const fieldId = id || autoId;
  const [focused, setFocused] = useState(false);
  const isError = !!error;
  const borderColor = isError ? "var(--border-decision-error)" : focused ? "var(--border-decision-focus)" : "var(--border-base-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-x-small)",
      width: "100%",
      ...style
    }
  }, showLabel && label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: "var(--text-label-field-input)",
      letterSpacing: "var(--text-label-field-input-ls)",
      textTransform: "uppercase",
      color: "var(--text-base-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-field-helper)",
      letterSpacing: "var(--text-field-helper-ls)",
      color: "var(--text-base-secondary)"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    "aria-invalid": isError || undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      minHeight: 48,
      padding: "12px 44px 12px 16px",
      font: "var(--text-field-value)",
      letterSpacing: "var(--text-field-value-ls)",
      color: "var(--text-base-primary)",
      appearance: "none",
      WebkitAppearance: "none",
      background: disabled ? "var(--surface-action-disabled)" : "var(--surface-base-raised)",
      border: `var(--border-width-hairline) solid ${borderColor}`,
      borderRadius: "var(--shape-corner-radius-x-small)",
      /* Focus ring uses outline, not a wider border: outline is outside layout,
         so the field cannot grow past its 48px min-height on focus. */
      outline: focused && !isError ? "var(--border-width-thin) solid var(--border-decision-focus)" : "none",
      outlineOffset: "calc(-1 * var(--border-width-thin))",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color var(--motion-duration-fast) var(--motion-easing-standard)"
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      pointerEvents: "none",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20,
    color: "var(--icon-base-primary)"
  }))), isError && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-field-helper-error)",
      letterSpacing: "var(--text-field-helper-error-ls)",
      color: "var(--text-decision-error)"
    }
  }, error));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ExchangeReturnItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Exchange/Return Item — the selectable item row used when building
 * a return or exchange. Selecting it reveals reason (and, for exchanges, a
 * replacement size). Figma: `card/exchange.return/item.V2`,
 * `card/create.return/summary/item`.
 *
 * NOTE: Figma carries both `item.V2` and a non-versioned original. V2 is the
 * current pattern (inline reason capture) — prefer it for new work.
 */
function ExchangeReturnItem({
  brand,
  name,
  price,
  size,
  qty = 1,
  tint = "var(--surface-decision-secondary)",
  selected = false,
  onSelect,
  mode = "return",
  reason,
  onReasonChange,
  exchangeSize,
  onExchangeSizeChange,
  reasons,
  sizes = ["UK 6", "UK 8", "UK 10", "UK 12"],
  readOnly = false,
  style,
  ...rest
}) {
  const reasonList = reasons || ["Too small", "Too big", "Doesn't suit me", "Faulty", "Not as described", "Arrived too late"];
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-medium)",
      width: "100%",
      padding: "var(--gap-large)",
      background: "var(--surface-base-raised)",
      border: `var(--border-width-${selected ? "thin" : "hairline"}) solid ${selected ? "var(--border-action-primary)" : "var(--border-base-subtle)"}`,
      borderRadius: "var(--shape-corner-radius-small)",
      transition: "border-color var(--motion-duration-fast) var(--motion-easing-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-medium)",
      alignItems: "flex-start"
    }
  }, !readOnly && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: selected,
    onChange: onSelect,
    "aria-label": `Select ${brand} ${name}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 96,
      flex: "0 0 auto",
      background: tint
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-product-description)",
      letterSpacing: "var(--text-body-product-description-ls)",
      color: "var(--text-base-primary)"
    }
  }, brand), name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-medium)",
      marginTop: "var(--gap-x-small)",
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, size && /*#__PURE__*/React.createElement("span", null, "Size: ", size), /*#__PURE__*/React.createElement("span", null, "Qty: ", qty))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)",
      color: "var(--text-base-primary)",
      flex: "0 0 auto"
    }
  }, price)), selected && !readOnly && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-medium)",
      paddingTop: "var(--gap-medium)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: mode === "exchange" ? "Reason for exchange" : "Reason for return",
    value: reason || "",
    onChange: onReasonChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Please select"), reasonList.map(r => /*#__PURE__*/React.createElement("option", {
    key: r
  }, r))), mode === "exchange" && /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Exchange for size",
    value: exchangeSize || "",
    onChange: onExchangeSizeChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Please select"), sizes.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), readOnly && reason && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--gap-small)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, "Reason: ", reason, exchangeSize ? ` · Exchanging for ${exchangeSize}` : ""));
}
Object.assign(__ds_scope, { ExchangeReturnItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ExchangeReturnItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thread DS Tag — removable / selectable pill (filters, applied refinements). */
function Tag({
  children,
  selected = false,
  showClose = false,
  onClose,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = selected ? "var(--surface-action-primary)" : hover ? "var(--surface-action-secondary-hover)" : "var(--surface-action-secondary)";
  const fg = selected ? "var(--text-action-primary)" : "var(--text-action-secondary)";
  const bd = selected ? "var(--border-action-primary)" : "var(--border-action-secondary)";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: onClick ? "button" : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gap-x-small)",
      padding: "6px 12px",
      background: bg,
      color: fg,
      border: "var(--border-width-hairline) solid",
      borderColor: bd,
      borderRadius: "var(--shape-corner-radius-full)",
      font: "var(--text-label-tag-large)",
      letterSpacing: "var(--text-label-tag-large-ls)",
      cursor: onClick ? "pointer" : "default",
      transition: "background var(--motion-duration-fast)",
      ...style
    }
  }, rest), children, showClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onClose && onClose(e);
    },
    style: {
      display: "inline-flex",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "currentColor"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tag.jsx", error: String((e && e.message) || e) }); }

// components/layout/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Thread DS Accordion — disclosure list. Used in the PDP as
 * `card/pdp/product.accordion.group` (product details, delivery, returns).
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style,
  ...rest
}) {
  const [open, setOpen] = useState(() => new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "var(--border-width-hairline) solid var(--border-base-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--gap-medium)",
        width: "100%",
        padding: "var(--gap-large) 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        font: "var(--text-label-accordion)",
        letterSpacing: "var(--text-label-accordion-ls)",
        color: "var(--text-base-primary)",
        textAlign: "left"
      }
    }, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20,
      color: "var(--icon-base-primary)",
      style: {
        flex: "0 0 auto",
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform var(--motion-duration-base) var(--motion-easing-standard)"
      }
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: "var(--gap-large)",
        font: "var(--text-body-paragraph)",
        letterSpacing: "var(--text-body-paragraph-ls)",
        color: "var(--text-base-secondary)"
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/layout/ListRange.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS List Range — the header strip that sits above a repeating list,
 * showing the visible range / count and an optional filter or sort control.
 * Figma: `list.range`, `_atoms/status/create.return/list.range`.
 */
function ListRange({
  label,
  count,
  total,
  action,
  actionIcon = "sliders-horizontal",
  onAction,
  style,
  ...rest
}) {
  const text = label || (total != null ? `Showing ${count} of ${total}` : `${count} items`);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--gap-medium)",
      padding: "var(--gap-medium) 0",
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-status)",
      letterSpacing: "var(--text-label-status-ls)",
      color: "var(--text-base-primary)"
    }
  }, text), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gap-x-small)",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-base-primary)",
      font: "var(--text-label-button-small)",
      letterSpacing: "var(--text-label-button-small-ls)"
    }
  }, action, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: actionIcon,
    size: 18,
    color: "currentColor"
  })));
}
Object.assign(__ds_scope, { ListRange });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ListRange.jsx", error: String((e && e.message) || e) }); }

// components/layout/PromoBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thread DS Promo Banner — full-width promotional strip in bag & checkout. */
function PromoBanner({
  children,
  tone = "Accent",
  icon,
  action,
  onAction,
  style,
  ...rest
}) {
  const tones = {
    Accent: {
      bg: "var(--surface-decision-success)",
      fg: "var(--text-decision-primary)"
    },
    Neutral: {
      bg: "var(--surface-decision-neutral)",
      fg: "var(--text-decision-primary)"
    },
    Invert: {
      bg: "var(--surface-base-invert)",
      fg: "var(--text-base-on-dark)"
    }
  };
  const t = tones[tone] || tones.Accent;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-medium)",
      width: "100%",
      padding: "var(--gap-medium) var(--gap-large)",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--shape-corner-radius-small)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "currentColor",
    style: {
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--text-body-paragraph-bold)",
      letterSpacing: "var(--text-body-paragraph-bold-ls)"
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      font: "var(--text-link)",
      letterSpacing: "var(--text-link-ls)",
      textDecoration: "underline",
      flex: "0 0 auto"
    }
  }, action));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ActionBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Action Bar — floating segmented icon actions overlaid on PDP
 * imagery (Save, Buy the Look, Video / Search variant).
 */
function ActionBar({
  actions,
  style,
  ...rest
}) {
  const items = actions || [{
    icon: "heart",
    label: "Save"
  }, {
    icon: "shapes",
    label: "Buy the look"
  }, {
    icon: "play",
    label: "Video"
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: "var(--surface-base-overlay-white)",
      backdropFilter: "blur(8px)",
      borderRadius: "var(--shape-corner-radius-full)",
      boxShadow: "var(--shadow-light)",
      padding: 4,
      gap: 2,
      ...style
    }
  }, rest), items.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": a.label,
    "aria-pressed": a.active || undefined,
    onClick: a.onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      background: a.active ? "var(--surface-action-secondary-hover)" : "transparent",
      border: "none",
      borderRadius: "var(--shape-corner-radius-full)",
      cursor: "pointer",
      color: a.active ? "var(--icon-decision-error)" : "var(--icon-base-primary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.icon,
    size: 22,
    color: "currentColor",
    style: a.active && a.icon === "heart" ? {
      fill: "currentColor"
    } : undefined
  }))));
}
Object.assign(__ds_scope, { ActionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ActionBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Global Navigation — top header. The ASOS wordmark is rendered as
 * plain type: no brand logo asset was present in the exported source.
 */
function Header({
  compact = false,
  bagCount = 0,
  onSearch,
  wordmark = "ASOS",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-large)",
      padding: compact ? "10px 16px" : "16px 24px",
      background: "var(--surface-base-raised)",
      borderBottom: "var(--border-width-hairline) solid var(--border-base-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-display-compact)",
      letterSpacing: "0px",
      fontWeight: 800,
      color: "var(--text-base-primary)",
      flex: "0 0 auto"
    }
  }, wordmark), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-small)",
      maxWidth: 640,
      background: "var(--surface-base-canvas)",
      border: "var(--border-width-hairline) solid var(--border-base-default)",
      borderRadius: "var(--shape-corner-radius-x-small)",
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    color: "var(--icon-base-secondary)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search for items and brands",
    onChange: onSearch,
    style: {
      flex: 1,
      border: "none",
      background: "none",
      outline: "none",
      font: "var(--text-field-value)",
      letterSpacing: "var(--text-field-value-ls)",
      color: "var(--text-base-primary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: compact ? "var(--gap-large)" : "var(--gap-x-large)"
    }
  }, compact && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 24,
    color: "var(--icon-base-primary)"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 24,
    color: "var(--icon-base-primary)"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 24,
    color: "var(--icon-base-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-bag",
    size: 24,
    color: "var(--icon-base-primary)"
  }), bagCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -6,
      right: -8,
      minWidth: 16,
      height: 16,
      padding: "0 4px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-action-accent-primary)",
      color: "var(--text-base-on-dark-fixed)",
      borderRadius: "var(--shape-corner-radius-full)",
      font: "var(--text-label-status-small)"
    }
  }, bagCount))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MyAccountNavigation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = [{
  icon: "package",
  label: "My orders"
}, {
  icon: "undo-2",
  label: "My returns"
}, {
  icon: "heart",
  label: "Saved items"
}, {
  icon: "map-pin",
  label: "Address book"
}, {
  icon: "credit-card",
  label: "Payment methods"
}, {
  icon: "user",
  label: "Details & password"
}, {
  icon: "bell",
  label: "Contact preferences"
}, {
  icon: "circle-help",
  label: "Help & contact"
}];

/**
 * Thread DS My Account Navigation. Figma: `my.account.navigation` +
 * `_atoms/my.account.navigation/item`.
 *
 * NOTE ON PLATFORM VARIANTS — in Figma this component holds four sibling
 * frames (`Group 1 ios` / `android` / `mweb` / `dweb`) and shows only the
 * active one. Here that is the `platform` prop: "dweb" renders the sidebar
 * list; app/mweb render the full-width row list with chevrons.
 */
function MyAccountNavigation({
  items = DEFAULT_ITEMS,
  active,
  platform = "dweb",
  onSelect,
  style,
  ...rest
}) {
  const isSidebar = platform === "dweb";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: isSidebar ? "transparent" : "var(--surface-base-raised)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = active === i;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onSelect && onSelect(i),
      "aria-current": on ? "page" : undefined,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--gap-medium)",
        width: "100%",
        padding: isSidebar ? "var(--gap-medium) var(--gap-small)" : "var(--gap-large)",
        background: on && isSidebar ? "var(--surface-base-elevated)" : "none",
        border: "none",
        borderBottom: isSidebar ? "none" : "var(--border-width-hairline) solid var(--border-base-subtle)",
        borderLeft: isSidebar ? `var(--border-width-thin) solid ${on ? "var(--surface-action-primary)" : "transparent"}` : "none",
        cursor: "pointer",
        textAlign: "left",
        minHeight: 48,
        font: on ? "var(--text-body-paragraph-bold)" : "var(--text-body-paragraph)",
        letterSpacing: "var(--text-body-paragraph-ls)",
        color: "var(--text-base-primary)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22,
      color: "var(--icon-base-primary)",
      style: {
        flex: "0 0 auto"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 20,
        height: 20,
        padding: "0 6px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface-action-accent-primary)",
        color: "var(--text-base-on-dark-fixed)",
        borderRadius: "var(--shape-corner-radius-full)",
        font: "var(--text-label-status-small)"
      }
    }, it.badge), !isSidebar && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 20,
      color: "var(--icon-base-secondary)",
      style: {
        flex: "0 0 auto"
      }
    }));
  }));
}
Object.assign(__ds_scope, { MyAccountNavigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MyAccountNavigation.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Page Title — the standard page heading block.
 * Figma: `page.title/default`, `page.title/bag`, `_atoms/page.title/my.account`.
 */
function PageTitle({
  title,
  subtitle,
  count,
  onBack,
  action,
  onAction,
  caps = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-medium)",
      width: "100%",
      padding: "var(--gap-large) 0",
      ...style
    }
  }, rest), onBack && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Back",
    onClick: onBack,
    style: {
      display: "inline-flex",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--icon-base-primary)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 24,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      display: "flex",
      alignItems: "baseline",
      gap: "var(--gap-small)",
      font: "var(--text-display-compact)",
      letterSpacing: "var(--text-display-compact-ls)",
      textTransform: caps ? "uppercase" : "none",
      color: "var(--text-base-primary)"
    }
  }, title, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, "(", count, ")")), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-base-primary)",
      font: "var(--text-link)",
      letterSpacing: "var(--text-link-ls)",
      textDecoration: "underline",
      flex: "0 0 auto"
    }
  }, action));
}
Object.assign(__ds_scope, { PageTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageTitle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thread DS Tab Bar — bottom navigation for app / mWeb. */
function TabBar({
  items,
  active = 0,
  onSelect,
  style,
  ...rest
}) {
  const tabs = items || [{
    icon: "house",
    label: "Home"
  }, {
    icon: "layout-grid",
    label: "Categories"
  }, {
    icon: "search",
    label: "Search"
  }, {
    icon: "heart",
    label: "Saved"
  }, {
    icon: "user",
    label: "Me"
  }];
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "stretch",
      width: "100%",
      background: "var(--surface-base-raised)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      ...style
    }
  }, rest), tabs.map((t, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onSelect && onSelect(i),
      "aria-current": on ? "page" : undefined,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "8px 4px 10px",
        background: "none",
        border: "none",
        cursor: "pointer",
        position: "relative",
        color: on ? "var(--icon-base-primary)" : "var(--icon-base-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 24,
      color: "currentColor",
      strokeWidth: on ? 2.4 : 2
    }), t.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -4,
        right: -8,
        minWidth: 16,
        height: 16,
        padding: "0 4px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface-action-accent-primary)",
        color: "var(--text-base-on-dark-fixed)",
        borderRadius: "var(--shape-corner-radius-full)",
        font: "var(--text-label-status-small)"
      }
    }, t.badge)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--text-label-tab-small)",
        letterSpacing: "var(--text-label-tab-small-ls)",
        color: on ? "var(--text-base-primary)" : "var(--text-base-secondary)"
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thread DS Modal — centered dialog with optional image and 1–2 CTAs. */
function Modal({
  open = true,
  title,
  children,
  image,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  onClose,
  platform = "Desktop",
  style,
  ...rest
}) {
  if (!open) return null;
  const mobile = platform === "Mobile";
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: mobile ? "flex-end" : "center",
      justifyContent: "center",
      background: "var(--surface-backdrop-dark)",
      padding: mobile ? 0 : 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: mobile ? "100%" : 440,
      background: "var(--surface-base-raised)",
      borderRadius: mobile ? "var(--shape-corner-radius-large) var(--shape-corner-radius-large) 0 0" : "var(--shape-corner-radius-medium)",
      boxShadow: "var(--shadow-heavy)",
      overflow: "hidden",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "var(--aspect-landscape)",
      background: `var(--surface-decision-secondary) center/cover no-repeat`,
      backgroundImage: `url(${image})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--gap-x-large)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-medium)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--gap-medium)"
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      flex: 1,
      font: "var(--text-display-compact)",
      letterSpacing: "var(--text-display-compact-ls)",
      color: "var(--text-base-primary)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      display: "inline-flex",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--icon-base-primary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 24,
    color: "currentColor"
  }))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-large)",
      letterSpacing: "var(--text-body-large-ls)",
      color: "var(--text-base-secondary)"
    }
  }, children), (primaryLabel || secondaryLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-small)",
      marginTop: "var(--gap-small)"
    }
  }, primaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "Primary",
    fullWidth: true,
    onClick: onPrimary
  }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "Secondary",
    fullWidth: true,
    onClick: onSecondary
  }, secondaryLabel)))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Sheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thread DS Sheet — bottom sheet panel. Figma: `sheet/pdp/fit.assistant`.
 * Slides up over the page with a grab handle and a scrim.
 */
function Sheet({
  open = true,
  title,
  children,
  footer,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      background: "var(--surface-backdrop-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 480,
      maxHeight: "85%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-base-raised)",
      borderRadius: "var(--shape-corner-radius-large) var(--shape-corner-radius-large) 0 0",
      boxShadow: "var(--shadow-heavy)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "var(--gap-medium) 0 var(--gap-small)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 40,
      height: 4,
      borderRadius: "var(--shape-corner-radius-full)",
      background: "var(--border-base-muted)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-medium)",
      padding: "0 var(--gap-x-large) var(--gap-medium)"
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      flex: 1,
      font: "var(--text-headline-page)",
      letterSpacing: "var(--text-headline-page-ls)",
      color: "var(--text-base-primary)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      display: "inline-flex",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--icon-base-primary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 24,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 var(--gap-x-large) var(--gap-x-large)",
      font: "var(--text-body-large)",
      letterSpacing: "var(--text-body-large-ls)",
      color: "var(--text-base-secondary)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--gap-large) var(--gap-x-large)",
      borderTop: "var(--border-width-hairline) solid var(--border-base-subtle)",
      display: "flex",
      gap: "var(--gap-small)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Sheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asos-account/AccountApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// My Account — orders list, returns list, order detail
function AccountApp() {
  const NS = window.ThreadDesignSystemASOS_f4a64a;
  const {
    Header,
    PageTitle,
    MyAccountNavigation,
    OrderCard,
    ReturnCard,
    ListRange,
    SectionMessage,
    DetailCard,
    BagItemCard,
    SummaryCard,
    Alert,
    Tag,
    Button,
    TabBar
  } = NS;
  const {
    orders,
    returns,
    orderItems
  } = window.ACCOUNT_DATA;
  const [section, setSection] = React.useState(0);
  const [detail, setDetail] = React.useState(null);
  const [dark, setDark] = React.useState(false);
  const [returnTab, setReturnTab] = React.useState(0);
  React.useEffect(() => {
    document.documentElement.toggleAttribute("data-theme", dark);
    if (dark) document.documentElement.setAttribute("data-theme", "dark");else document.documentElement.removeAttribute("data-theme");
  }, [dark]);
  const Panel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-large)"
    }
  }, children);
  const OrdersView = () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PageTitle, {
    title: "My orders",
    count: orders.length
  }), /*#__PURE__*/React.createElement(SectionMessage, {
    icon: "sparkles",
    title: "Returns just got faster",
    action: "See what's new"
  }, "We've updated how returns work in the app \u2014 drop off with no printer and no label."), /*#__PURE__*/React.createElement(ListRange, {
    count: orders.length,
    total: orders.length,
    action: "Filter & sort"
  }), orders.map(o => /*#__PURE__*/React.createElement(OrderCard, {
    key: o.id,
    orderNumber: o.id,
    date: o.date,
    total: o.total,
    status: o.status,
    statusTone: o.statusTone,
    itemCount: o.itemCount,
    thumbnails: o.thumbnails,
    onAction: () => setDetail(o)
  })));
  const ReturnsView = () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PageTitle, {
    title: "My returns",
    count: returns.length
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["In progress", "Completed"].map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: returnTab === i,
    onClick: () => setReturnTab(i)
  }, t))), returns.filter(r => returnTab === 0 ? r.statusTone !== "Success" : r.statusTone === "Success").map(r => /*#__PURE__*/React.createElement(ReturnCard, _extends({
    key: r.reference
  }, r, {
    action: r.statusTone === "Success" ? "View details" : "Track return"
  }))), /*#__PURE__*/React.createElement(SectionMessage, {
    icon: "undo-2",
    title: "Need to return something else?",
    action: "Start a return"
  }, "You have 28 days from delivery to send items back."));
  const DetailView = () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PageTitle, {
    title: `Order ${detail.id}`,
    subtitle: `Placed ${detail.date}`,
    onBack: () => setDetail(null),
    action: "Get help",
    onAction: () => {}
  }), /*#__PURE__*/React.createElement(Alert, {
    type: "Success",
    title: detail.status
  }, "Delivered to your safe place on ", detail.date, "."), /*#__PURE__*/React.createElement(SectionMessage, {
    icon: "repeat",
    title: "Exchanges are here",
    action: "Exchange an item"
  }, "Swap a size or colour instead of returning for a refund."), /*#__PURE__*/React.createElement(DetailCard, {
    title: "Delivery address",
    icon: "map-pin",
    lines: ["Alex Chen", "72 Rivington Street", "London EC2A 3AY", "United Kingdom"]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)"
    }
  }, "Items"), orderItems.map((it, i) => /*#__PURE__*/React.createElement(BagItemCard, _extends({
    key: i,
    readOnly: true
  }, it)))), /*#__PURE__*/React.createElement(DetailCard, {
    title: "Payment details",
    icon: "credit-card",
    lines: ["Visa ending 4242", "Billed 12 Jul 2026"]
  }), /*#__PURE__*/React.createElement(SummaryCard, {
    title: "Order total",
    total: detail.total,
    rows: [["Subtotal", "£90.00"], ["Discount", "−£8.00", "accent"], ["Delivery", "FREE", "accent"]]
  }), /*#__PURE__*/React.createElement(DetailCard, {
    title: "Need help with this order?",
    icon: "circle-help",
    lines: ["Track your parcel, start a return, or contact our support team."]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Secondary",
    size: "small"
  }, "Start a return"), /*#__PURE__*/React.createElement(Button, {
    type: "Tertiary",
    size: "small"
  }, "Contact us"))));
  const views = [OrdersView, ReturnsView];
  const Current = detail ? DetailView : views[section] || OrdersView;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-base-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    bagCount: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: "0 auto",
      padding: "24px",
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 24
    }
  }, /*#__PURE__*/React.createElement(MyAccountNavigation, {
    platform: "dweb",
    active: detail ? -1 : section,
    onSelect: i => {
      setDetail(null);
      setSection(i);
    },
    items: [{
      icon: "package",
      label: "My orders",
      badge: orders.length
    }, {
      icon: "undo-2",
      label: "My returns",
      badge: returns.length
    }, {
      icon: "heart",
      label: "Saved items"
    }, {
      icon: "map-pin",
      label: "Address book"
    }, {
      icon: "credit-card",
      label: "Payment methods"
    }, {
      icon: "user",
      label: "Details & password"
    }, {
      icon: "circle-help",
      label: "Help & contact"
    }]
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDark(d => !d),
    style: {
      marginTop: 20,
      width: "100%",
      padding: "10px",
      background: "none",
      cursor: "pointer",
      border: "1px solid var(--border-base-default)",
      borderRadius: "var(--shape-corner-radius-x-small)",
      color: "var(--text-base-primary)",
      font: "var(--text-label-button-small)",
      letterSpacing: "var(--text-label-button-small-ls)"
    }
  }, dark ? "Light mode" : "Dark mode")), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Current, null))));
}
Object.assign(window, {
  AccountApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-account/AccountApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asos-account/data.js
try { (() => {
// My Account UI kit — sample data
window.ACCOUNT_DATA = {
  orders: [{
    id: "#1284920",
    date: "12 Jul 2026",
    total: "£86.00",
    status: "Delivered",
    statusTone: "Success",
    itemCount: 5,
    thumbnails: ["#d9d2c5", "#8f9179", "#ededed", "#2d2d2d", "#7d94b0"]
  }, {
    id: "#1279144",
    date: "28 Jun 2026",
    total: "£45.00",
    status: "Out for delivery",
    statusTone: "Pending",
    itemCount: 1,
    thumbnails: ["#7d94b0"]
  }, {
    id: "#1265003",
    date: "02 Jun 2026",
    total: "£132.99",
    status: "Delivered",
    statusTone: "Success",
    itemCount: 3,
    thumbnails: ["#b0673f", "#3f6f52", "#c2a06b"]
  }],
  returns: [{
    reference: "RTN-88214",
    date: "18 Jul 2026",
    refund: "£42.00",
    itemCount: 2,
    carrier: "Evri",
    status: "In transit",
    statusTone: "Pending"
  }, {
    reference: "RTN-87550",
    date: "24 Jun 2026",
    refund: "£29.99",
    itemCount: 1,
    carrier: "InPost",
    status: "Refunded",
    statusTone: "Success"
  }],
  orderItems: [{
    brand: "ASOS DESIGN",
    name: "Oversized linen shirt in stone",
    price: "£32.00",
    size: "M",
    qty: 1,
    tint: "#d9d2c5"
  }, {
    brand: "COLLUSION",
    name: "Relaxed cargo trouser in khaki",
    price: "£28.00",
    size: "M",
    qty: 1,
    tint: "#8f9179"
  }, {
    brand: "Nike",
    name: "Air Max 90 trainers in triple white",
    price: "£26.00",
    size: "UK 9",
    qty: 1,
    tint: "#ededed"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-account/data.js", error: String((e && e.message) || e) }); }

// ui_kits/asos-returns/ReturnsApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Exchange / Return flow — item selection → summary → drop-off → confirmation
function ReturnsApp() {
  const NS = window.ThreadDesignSystemASOS_f4a64a;
  const {
    Header,
    PageTitle,
    ListRange,
    ExchangeReturnItem,
    CTAFooter,
    Button,
    SectionMessage,
    SummaryCard,
    DetailCard,
    InputField,
    Alert,
    StatusBar,
    Tag,
    Icon
  } = NS;
  const ITEMS = [{
    id: 1,
    brand: "ASOS DESIGN",
    name: "Oversized linen shirt in stone",
    price: "£32.00",
    size: "M",
    tint: "#d9d2c5"
  }, {
    id: 2,
    brand: "COLLUSION",
    name: "Relaxed cargo trouser in khaki",
    price: "£28.00",
    size: "M",
    tint: "#8f9179"
  }, {
    id: 3,
    brand: "Nike",
    name: "Air Max 90 trainers in triple white",
    price: "£26.00",
    size: "UK 9",
    tint: "#ededed"
  }];
  const DROPOFFS = [{
    name: "Evri ParcelShop — Rivington Newsagents",
    dist: "0.2 miles",
    hours: "Open until 20:00"
  }, {
    name: "InPost Locker — Old Street Station",
    dist: "0.4 miles",
    hours: "Open 24 hours"
  }, {
    name: "Royal Mail — Shoreditch Delivery Office",
    dist: "0.8 miles",
    hours: "Open until 17:30"
  }];
  const [step, setStep] = React.useState(0);
  const [mode, setMode] = React.useState("return");
  const [sel, setSel] = React.useState({});
  const [reasons, setReasons] = React.useState({});
  const [sizes, setSizes] = React.useState({});
  const [dropoff, setDropoff] = React.useState(null);
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");else document.documentElement.removeAttribute("data-theme");
  }, [dark]);
  const chosen = ITEMS.filter(i => sel[i.id]);
  const refund = chosen.reduce((s, i) => s + parseFloat(i.price.replace(/[^0-9.]/g, "")), 0);
  const fmt = n => "£" + n.toFixed(2);
  const canContinue = chosen.length > 0 && chosen.every(i => reasons[i.id]);
  const Steps = () => /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 0 8px"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    steps: ["Select items", "Summary", "Drop-off", "Done"],
    stage: step + 1
  }));
  const SelectStep = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    title: mode === "exchange" ? "Exchange items" : "Return items",
    subtitle: "Order #1284920 \xB7 Delivered 12 Jul 2026"
  }), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, [["return", "Return for refund"], ["exchange", "Exchange"]].map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: mode === k,
    onClick: () => setMode(k)
  }, l))), /*#__PURE__*/React.createElement(SectionMessage, {
    icon: "undo-2",
    title: mode === "exchange" ? "Swap for another size" : "Free returns within 28 days"
  }, mode === "exchange" ? "Pick the items you'd like to swap and choose a replacement size. We'll send the new item once yours is scanned." : "Select the items you'd like to send back and tell us why. Refunds land 5–10 days after we receive them."), /*#__PURE__*/React.createElement(ListRange, {
    count: ITEMS.length,
    label: `${ITEMS.length} items in this order`
  }), ITEMS.map(it => /*#__PURE__*/React.createElement(ExchangeReturnItem, _extends({
    key: it.id
  }, it, {
    mode: mode,
    selected: !!sel[it.id],
    onSelect: () => setSel(s => ({
      ...s,
      [it.id]: !s[it.id]
    })),
    reason: reasons[it.id],
    onReasonChange: e => setReasons(r => ({
      ...r,
      [it.id]: e.target.value
    })),
    exchangeSize: sizes[it.id],
    onExchangeSizeChange: e => setSizes(z => ({
      ...z,
      [it.id]: e.target.value
    }))
  }))), /*#__PURE__*/React.createElement(CTAFooter, {
    sticky: false,
    summary: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, chosen.length, " item", chosen.length === 1 ? "" : "s", " selected"), /*#__PURE__*/React.createElement("span", null, fmt(refund)))
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Secondary",
    fullWidth: true,
    onClick: () => {
      setSel({});
      setReasons({});
    }
  }, "Clear"), /*#__PURE__*/React.createElement(Button, {
    type: "Primary",
    fullWidth: true,
    disabled: !canContinue,
    onClick: () => setStep(1)
  }, "Continue")), chosen.length > 0 && !canContinue && /*#__PURE__*/React.createElement(Alert, {
    type: "Warning"
  }, "Please give a reason for every selected item."));
  const SummaryStep = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    title: "Check your details",
    onBack: () => setStep(0)
  }), /*#__PURE__*/React.createElement(Steps, null), chosen.map(it => /*#__PURE__*/React.createElement(ExchangeReturnItem, _extends({
    key: it.id
  }, it, {
    readOnly: true,
    reason: reasons[it.id],
    exchangeSize: sizes[it.id]
  }))), /*#__PURE__*/React.createElement(SummaryCard, {
    title: "One parcel",
    footnote: "Send everything back together in one parcel to keep tracking simple.",
    rows: [["Items", String(chosen.length)], ["Return postage", "FREE", "accent"]],
    total: mode === "exchange" ? "£0.00" : fmt(refund),
    totalLabel: mode === "exchange" ? "To pay" : "Estimated refund"
  }), /*#__PURE__*/React.createElement(DetailCard, {
    title: "Collection address",
    icon: "map-pin",
    lines: ["Alex Chen", "72 Rivington Street", "London EC2A 3AY"],
    onAction: () => {}
  }), /*#__PURE__*/React.createElement(CTAFooter, {
    sticky: false
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Secondary",
    fullWidth: true,
    onClick: () => setStep(0)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    type: "Primary",
    fullWidth: true,
    onClick: () => setStep(2)
  }, "Choose drop-off")));
  const DropOffStep = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    title: "Where are you dropping off?",
    onBack: () => setStep(1)
  }), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement(SectionMessage, {
    icon: "map-pin",
    title: "No printer, no label"
  }, "Show the QR code on your phone at any of these points."), /*#__PURE__*/React.createElement(InputField, {
    label: "Postcode",
    defaultValue: "EC2A 3AY",
    helper: "Showing points within 1 mile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, DROPOFFS.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setDropoff(i),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      padding: 16,
      textAlign: "left",
      cursor: "pointer",
      background: "var(--surface-base-raised)",
      border: `var(--border-width-${dropoff === i ? "thin" : "hairline"}) solid ${dropoff === i ? "var(--border-action-primary)" : "var(--border-base-subtle)"}`,
      borderRadius: "var(--shape-corner-radius-small)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 22,
    color: "var(--icon-base-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph-bold)",
      letterSpacing: "var(--text-body-paragraph-bold-ls)",
      color: "var(--text-base-primary)"
    }
  }, d.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, d.dist, " \xB7 ", d.hours)), dropoff === i && /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 22,
    color: "var(--icon-decision-success)"
  })))), /*#__PURE__*/React.createElement(CTAFooter, {
    sticky: false
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Secondary",
    fullWidth: true,
    onClick: () => setStep(1)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    type: "Primary",
    fullWidth: true,
    disabled: dropoff == null,
    onClick: () => setStep(3)
  }, "Confirm return")));
  const DoneStep = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    title: "Return confirmed"
  }), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement(Alert, {
    type: "Success",
    title: "You're all set"
  }, "We've emailed your QR code. Drop off within 14 days."), /*#__PURE__*/React.createElement(SummaryCard, {
    title: "Return RTN-88301",
    rows: [["Items", String(chosen.length)], ["Drop-off", DROPOFFS[dropoff || 0].name], ["Refund method", "Original payment"]],
    total: mode === "exchange" ? "£0.00" : fmt(refund),
    totalLabel: mode === "exchange" ? "To pay" : "Estimated refund",
    footnote: "Refunds take 5\u201310 days to appear after we receive your parcel."
  }), chosen.map(it => /*#__PURE__*/React.createElement(ExchangeReturnItem, _extends({
    key: it.id
  }, it, {
    readOnly: true,
    reason: reasons[it.id],
    exchangeSize: sizes[it.id]
  }))), /*#__PURE__*/React.createElement(CTAFooter, {
    sticky: false
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Secondary",
    fullWidth: true,
    onClick: () => {
      setStep(0);
      setSel({});
      setReasons({});
      setDropoff(null);
    }
  }, "Start another"), /*#__PURE__*/React.createElement(Button, {
    type: "Primary",
    fullWidth: true
  }, "View my returns")));
  const STEPS = [SelectStep, SummaryStep, DropOffStep, DoneStep];
  const Current = STEPS[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-base-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    bagCount: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-large)"
    }
  }, /*#__PURE__*/React.createElement(Current, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDark(d => !d),
    style: {
      alignSelf: "flex-start",
      padding: "8px 14px",
      background: "none",
      cursor: "pointer",
      border: "1px solid var(--border-base-default)",
      borderRadius: "var(--shape-corner-radius-x-small)",
      color: "var(--text-base-primary)",
      font: "var(--text-label-button-small)",
      letterSpacing: "var(--text-label-button-small-ls)"
    }
  }, dark ? "Light mode" : "Dark mode")));
}
Object.assign(window, {
  ReturnsApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-returns/ReturnsApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asos-web/App.jsx
try { (() => {
// App shell — routing, header, sign-in modal
function App() {
  const NS = window.ThreadDesignSystemASOS_f4a64a;
  const {
    Header,
    Modal,
    InputField,
    SocialButton,
    Button,
    Snackbar
  } = NS;
  const {
    categories
  } = window.ASOS_DATA;
  const [route, setRoute] = React.useState({
    name: "plp"
  });
  const [saved, setSaved] = React.useState({
    2: true
  });
  const [bag, setBag] = React.useState([]);
  const [signIn, setSignIn] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const priceNum = s => parseFloat(String(s).replace(/[^0-9.]/g, "")) || 0;
  const toggleSave = id => setSaved(s => ({
    ...s,
    [id]: !s[id]
  }));
  const addToBag = (p, size) => {
    setBag(b => [...b, {
      ...p,
      size,
      qty: 1,
      priceNum: priceNum(p.price)
    }]);
    setToast("Added to your bag");
    setTimeout(() => setToast(null), 2600);
  };
  const bagCount = bag.reduce((n, it) => n + it.qty, 0);
  const NavLink = ({
    children,
    onClick,
    active
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "12px 0",
      font: "var(--text-label-tab)",
      letterSpacing: "var(--text-label-tab-ls)",
      textTransform: "uppercase",
      color: active ? "var(--text-base-primary)" : "var(--text-base-secondary)",
      borderBottom: active ? "2px solid var(--surface-action-primary)" : "2px solid transparent"
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-base-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target.closest("span,input") === null) setRoute({
        name: "plp"
      });
    }
  }, /*#__PURE__*/React.createElement(Header, {
    bagCount: bagCount
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 24px",
      background: "var(--surface-base-raised)",
      borderBottom: "1px solid var(--border-base-subtle)",
      overflowX: "auto"
    }
  }, categories.map((c, i) => /*#__PURE__*/React.createElement(NavLink, {
    key: c,
    active: route.name === "plp" && i === 0,
    onClick: () => setRoute({
      name: "plp"
    })
  }, c)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    onClick: () => setSignIn(true)
  }, "Sign in"), /*#__PURE__*/React.createElement(NavLink, {
    active: route.name === "bag",
    onClick: () => setRoute({
      name: "bag"
    })
  }, "Bag (", bagCount, ")"))), /*#__PURE__*/React.createElement("main", {
    style: {
      paddingBottom: 48
    }
  }, route.name === "plp" && /*#__PURE__*/React.createElement(PLP, {
    saved: saved,
    onSave: toggleSave,
    onOpenProduct: p => setRoute({
      name: "pdp",
      product: p
    })
  }), route.name === "pdp" && /*#__PURE__*/React.createElement(PDP, {
    product: route.product,
    saved: saved,
    onSave: toggleSave,
    onBack: () => setRoute({
      name: "plp"
    }),
    onAddToBag: addToBag
  }), route.name === "bag" && /*#__PURE__*/React.createElement(Bag, {
    items: bag,
    onQty: (i, d) => setBag(b => b.map((it, j) => j === i ? {
      ...it,
      qty: Math.max(1, it.qty + d)
    } : it)),
    onRemove: i => setBag(b => b.filter((_, j) => j !== i)),
    onCheckout: () => setSignIn(true),
    onContinue: () => setRoute({
      name: "plp"
    })
  })), signIn && /*#__PURE__*/React.createElement(Modal, {
    platform: "Desktop",
    title: "Sign in",
    onClose: () => setSignIn(false),
    primaryLabel: null,
    secondaryLabel: null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(InputField, {
    label: "Password",
    type: "password"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "Primary",
    fullWidth: true,
    onClick: () => {
      setSignIn(false);
      setToast("Signed in — welcome back");
      setTimeout(() => setToast(null), 2600);
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      color: "var(--text-base-secondary)",
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-base-subtle)"
    }
  }), " OR ", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-base-subtle)"
    }
  })), /*#__PURE__*/React.createElement(SocialButton, {
    provider: "Apple"
  }), /*#__PURE__*/React.createElement(SocialButton, {
    provider: "Google"
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: 24,
      transform: "translateX(-50%)",
      zIndex: 1200
    }
  }, /*#__PURE__*/React.createElement(Snackbar, {
    type: "Success",
    action: "View bag",
    onAction: () => {
      setToast(null);
      setRoute({
        name: "bag"
      });
    }
  }, toast)));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asos-web/Bag.jsx
try { (() => {
// Bag — shopping bag / checkout summary
function Bag({
  items,
  onQty,
  onRemove,
  onCheckout,
  onContinue
}) {
  const NS = window.ThreadDesignSystemASOS_f4a64a;
  const {
    Button,
    StatusBar
  } = NS;
  const subtotal = items.reduce((s, it) => s + it.priceNum * it.qty, 0);
  const delivery = subtotal >= 35 || subtotal === 0 ? 0 : 4.5;
  const total = subtotal + delivery;
  const fmt = n => "£" + n.toFixed(2);
  if (!items.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      padding: "64px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(NS.Icon, {
    name: "shopping-bag",
    size: 48,
    color: "var(--icon-base-secondary)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "16px 0 8px",
      font: "var(--text-display-compact)",
      letterSpacing: "var(--text-display-compact-ls)"
    }
  }, "Your bag is empty"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      color: "var(--text-base-secondary)",
      font: "var(--text-body-large)",
      letterSpacing: "var(--text-body-large-ls)"
    }
  }, "Once you add something it'll show up here."), /*#__PURE__*/React.createElement(Button, {
    type: "Primary",
    onClick: onContinue
  }, "Continue shopping"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      padding: "24px",
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 16px",
      font: "var(--text-display-supporting)",
      letterSpacing: "var(--text-display-supporting-ls)"
    }
  }, "My bag"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    steps: ["Bag", "Delivery", "Payment", "Done"],
    stage: 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 16,
      padding: "16px 0",
      borderTop: "1px solid var(--border-base-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 112,
      background: it.tint,
      borderRadius: 4,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-product-description)",
      letterSpacing: "var(--text-body-product-description-ls)"
    }
  }, it.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)",
      marginBottom: 6
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)",
      color: "var(--text-base-secondary)"
    }
  }, "Size: ", it.size), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid var(--border-base-default)",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(i, -1),
    "aria-label": "Decrease",
    style: {
      width: 32,
      height: 32,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--icon-base-primary)"
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 24,
      textAlign: "center",
      font: "var(--text-label-field-input)"
    }
  }, it.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(i, 1),
    "aria-label": "Increase",
    style: {
      width: 32,
      height: 32,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--icon-base-primary)"
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-base-secondary)",
      font: "var(--text-link)",
      letterSpacing: "var(--text-link-ls)"
    }
  }, /*#__PURE__*/React.createElement(NS.Icon, {
    name: "trash-2",
    size: 16,
    color: "currentColor"
  }), " Remove"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)"
    }
  }, fmt(it.priceNum * it.qty)))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      border: "1px solid var(--border-base-subtle)",
      borderRadius: 8,
      padding: 20,
      position: "sticky",
      top: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 14px",
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)"
    }
  }, "Order summary"), [["Subtotal", fmt(subtotal)], ["Delivery", delivery === 0 ? "FREE" : fmt(delivery)]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 0",
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      marginTop: 6,
      borderTop: "1px solid var(--border-base-subtle)",
      font: "var(--text-headline-section)",
      letterSpacing: "var(--text-headline-section-ls)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmt(total))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Accent Primary",
    fullWidth: true,
    onClick: onCheckout
  }, "Checkout"), /*#__PURE__*/React.createElement(Button, {
    type: "Secondary",
    fullWidth: true,
    onClick: onContinue
  }, "Continue shopping"))));
}
Object.assign(window, {
  Bag
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-web/Bag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asos-web/PDP.jsx
try { (() => {
// PDP — product detail page
function PDP({
  product,
  onBack,
  onAddToBag,
  onSave,
  saved
}) {
  const NS = window.ThreadDesignSystemASOS_f4a64a;
  const {
    Button,
    Select,
    IconButton,
    ActionBar,
    StatusBadge,
    Alert
  } = NS;
  const [size, setSize] = React.useState("");
  const [added, setAdded] = React.useState(false);
  const p = product;
  const add = () => {
    if (!size) return;
    onAddToBag(p, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-base-secondary)",
      font: "var(--text-link)",
      letterSpacing: "var(--text-link-ls)",
      marginBottom: 16,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(NS.Icon, {
    name: "chevron-left",
    size: 18,
    color: "currentColor"
  }), " Back to products"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "var(--aspect-product)",
      background: p.tint,
      borderRadius: 4
    }
  }), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: p.badgeStatus || "Default"
  }, p.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 12,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement(ActionBar, {
    actions: [{
      icon: "heart",
      label: "Save",
      active: !!saved[p.id],
      onClick: () => onSave(p.id)
    }, {
      icon: "shapes",
      label: "Buy the look"
    }, {
      icon: "expand",
      label: "Zoom"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-product-description)",
      letterSpacing: "var(--text-body-product-description-ls)"
    }
  }, p.brand), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "4px 0 0",
      font: "var(--text-display-compact)",
      letterSpacing: "var(--text-display-compact-ls)"
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, p.wasPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-headline-section)",
      color: "var(--text-decision-sale)",
      textDecoration: "line-through"
    }
  }, p.wasPrice), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-headline-page)",
      letterSpacing: "var(--text-headline-page-ls)",
      color: p.wasPrice ? "var(--text-decision-sale)" : "var(--text-base-primary)"
    }
  }, p.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-body-large)",
      letterSpacing: "var(--text-body-large-ls)",
      color: "var(--text-base-secondary)"
    }
  }, "A wardrobe staple, reimagined. Relaxed silhouette with a soft handle \u2014 designed to layer effortlessly through the season."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Size",
    value: size,
    onChange: e => setSize(e.target.value),
    error: added === "err" ? "Please select a size" : undefined
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Please select"), /*#__PURE__*/React.createElement("option", null, "UK 6"), /*#__PURE__*/React.createElement("option", null, "UK 8"), /*#__PURE__*/React.createElement("option", null, "UK 10"), /*#__PURE__*/React.createElement("option", null, "UK 12"), /*#__PURE__*/React.createElement("option", null, "UK 14"))), added === true && /*#__PURE__*/React.createElement(Alert, {
    type: "Success",
    title: "Added to bag"
  }, p.name, " \xB7 ", size), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Accent Primary",
    fullWidth: true,
    onClick: add
  }, "Add to bag"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    type: "Secondary",
    "aria-label": "Save",
    onClick: () => onSave(p.id)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 4,
      color: "var(--text-base-secondary)",
      font: "var(--text-body-small)",
      letterSpacing: "var(--text-body-small-ls)"
    }
  }, /*#__PURE__*/React.createElement(NS.Icon, {
    name: "truck",
    size: 18,
    color: "var(--icon-base-secondary)"
  }), " Free standard delivery on orders over \xA335"))));
}
Object.assign(window, {
  PDP
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-web/PDP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asos-web/PLP.jsx
try { (() => {
// PLP — product listing page with filter rail
const {
  Tag,
  Button
} = window.ThreadDesignSystemASOS_f4a64a;
function PLP({
  onOpenProduct,
  onSave,
  saved
}) {
  const NS = window.ThreadDesignSystemASOS_f4a64a;
  const {
    products,
    filters
  } = window.ASOS_DATA;
  const [active, setActive] = React.useState({});
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--text-display-supporting)",
      letterSpacing: "var(--text-display-supporting-ls)"
    }
  }, "Women's New In"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, products.length, " styles")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      font: "var(--text-body-paragraph)",
      letterSpacing: "var(--text-body-paragraph-ls)",
      color: "var(--text-base-secondary)"
    }
  }, "Fresh drops landing daily \u2014 the latest edit across your favourite brands."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 24
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: !!active[f],
    onClick: () => setActive(a => ({
      ...a,
      [f]: !a[f]
    }))
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, products.map(p => /*#__PURE__*/React.createElement(NS.ProductCard, {
    key: p.id,
    brand: p.brand,
    name: p.name,
    price: p.price,
    wasPrice: p.wasPrice,
    badge: p.badge,
    badgeStatus: p.badgeStatus,
    colours: p.colours,
    image: window.tintImg(p.tint),
    href: "#",
    saved: !!saved[p.id],
    onSave: () => onSave(p.id),
    onClick: e => {
      e.preventDefault();
      onOpenProduct(p);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "Secondary"
  }, "Load more")));
}
Object.assign(window, {
  PLP
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-web/PLP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asos-web/data.js
try { (() => {
// ASOS web UI kit — sample catalogue (window global; no real product imagery in source)
// Flat tint tiles stand in for photography (no product imagery in the exported source).
window.tintImg = tint => "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400'><rect width='300' height='400' fill='${tint}'/></svg>`);
window.ASOS_DATA = {
  categories: ["New in", "Clothing", "Shoes", "Accessories", "Face + Body", "Brands", "Outlet"],
  filters: ["Sale", "New season", "Dresses", "Tops", "Jeans", "Under £30", "Selling fast"],
  products: [{
    id: 1,
    brand: "ASOS DESIGN",
    name: "Oversized linen shirt in stone",
    price: "£32",
    colours: 3,
    tint: "#d9d2c5"
  }, {
    id: 2,
    brand: "COLLUSION",
    name: "Relaxed cargo trouser in khaki",
    price: "£28",
    wasPrice: "£40",
    badge: "-30%",
    badgeStatus: "Discount",
    tint: "#8f9179"
  }, {
    id: 3,
    brand: "Nike",
    name: "Air Max 90 trainers in triple white",
    price: "£120",
    badge: "New",
    badgeStatus: "New",
    colours: 2,
    tint: "#ededed"
  }, {
    id: 4,
    brand: "ASOS DESIGN",
    name: "Slim fit t-shirt in black",
    price: "£10",
    badge: "Selling fast",
    tint: "#2d2d2d"
  }, {
    id: 5,
    brand: "Weekday",
    name: "Rowe straight leg jeans",
    price: "£45",
    colours: 4,
    tint: "#7d94b0"
  }, {
    id: 6,
    brand: "Stradivarius",
    name: "Knitted midi dress in rust",
    price: "£29.99",
    wasPrice: "£39.99",
    badge: "-25%",
    badgeStatus: "Discount",
    tint: "#b0673f"
  }, {
    id: 7,
    brand: "adidas Originals",
    name: "Gazelle trainers in green",
    price: "£90",
    badge: "New",
    badgeStatus: "New",
    colours: 3,
    tint: "#3f6f52"
  }, {
    id: 8,
    brand: "ASOS DESIGN",
    name: "Longline wool-mix coat in camel",
    price: "£75",
    tint: "#c2a06b"
  }, {
    id: 9,
    brand: "Bershka",
    name: "Ribbed crop top in ecru",
    price: "£15.99",
    tint: "#e6ded2"
  }, {
    id: 10,
    brand: "Reclaimed Vintage",
    name: "Baggy cargo jean in washed black",
    price: "£52",
    badge: "Selling fast",
    tint: "#4a4a4f"
  }, {
    id: 11,
    brand: "New Balance",
    name: "530 trainers in silver",
    price: "£110",
    colours: 2,
    tint: "#d5d5db"
  }, {
    id: 12,
    brand: "Monki",
    name: "Poplin mini dress in floral",
    price: "£38",
    wasPrice: "£48",
    badge: "-20%",
    badgeStatus: "Discount",
    tint: "#c98fa5"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asos-web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BagItemCard = __ds_scope.BagItemCard;

__ds_ns.DetailCard = __ds_scope.DetailCard;

__ds_ns.ExchangeReturnItem = __ds_scope.ExchangeReturnItem;

__ds_ns.OrderCard = __ds_scope.OrderCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ReturnCard = __ds_scope.ReturnCard;

__ds_ns.SummaryCard = __ds_scope.SummaryCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.SectionMessage = __ds_scope.SectionMessage;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.InputField = __ds_scope.InputField;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SaveButton = __ds_scope.SaveButton;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SocialButton = __ds_scope.SocialButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CTAFooter = __ds_scope.CTAFooter;

__ds_ns.ListRange = __ds_scope.ListRange;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ActionBar = __ds_scope.ActionBar;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.MyAccountNavigation = __ds_scope.MyAccountNavigation;

__ds_ns.PageTitle = __ds_scope.PageTitle;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Sheet = __ds_scope.Sheet;

})();
