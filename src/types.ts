type GenericObjectKeys = number | string;
export type GenericObject = {
  [key in GenericObjectKeys]: string | number;
};

export type PseudoClass = ":hover" | ":focus" | ":active";

export type UtilityConfig<T extends any> = T & {
  names?: GenericObject;
  whitelist?: string[];
  blacklist?: string[];
  isResponsive?: boolean;
  responsiveWhiteList?: string[];
  responsiveBlackList?: string[];
  meta?: Meta;
  pseudoClasses?:
    | {
        [key: string]: PseudoClass[];
      }
    | PseudoClass[];
  nestedRules?: any;
  modifiersOnly?: boolean;
  className?: string;
  property?: string;
  props?: GenericObject;
};

export interface GlobalUtilityConfig {
  breakPoints: {
    [key: string]: string;
  };
  prefix?: string;
  output?: string;
  breakPointSeparator: string;
  pseudoClassesSeparator: string;
  seriesSeparator: string;
  classTemplate?: string;
  openFile?: boolean;
}

export interface GetRulesOutput {
  name: GenericObjectKeys;
  key: string;
  value: GenericObject | string[] | string;
}

export type GetRules<T extends any> = (
  names: GenericObject,
  // eslint-disable-next-line @typescript-eslint/ban-types
  cfg: UtilityConfig<T>
) => Record<string, GetRulesOutput>;

export interface Meta {
  module: string;
  id?: string;
}

export interface ApplyRulesInput<T extends any> {
  config: UtilityConfig<T>;
  globalConfig: GlobalUtilityConfig;
  defaultNames: GenericObject;
  getRules: GetRules<T>;
  meta: Meta;
  classTemplate?: string;
}

export type ApplyRulesOutput = any[];

export type ApplyRules<T extends any> = (
  config: ApplyRulesInput<T>
) => ApplyRulesOutput;

export type Module<T extends any> = (
  config?: UtilityConfig<T>
) => (globalConfig: GlobalUtilityConfig) => ApplyRulesOutput;

/* Below is the typing fot the configs */
export {
  AnimationModuleType,
  AnimationSupportedTypes,
} from "./modules/animation";
export {
  BackgroundImageModuleType,
  BackgroundImageSupportedTypes,
} from "./modules/background-image";
export { BorderModuleType, BorderSupportedTypes } from "./modules/border";
export {
  BoxShadowModuleType,
  BoxShadowSupportedTypes,
} from "./modules/box-shadow";
export {
  BoxSizingModuleType,
  BoxSizingSupportedTypes,
} from "./modules/box-sizing";
export { ClearModuleType, ClearSupportedTypes } from "./modules/clear";
export { ColorsModuleType, ColorsSupportedTypes } from "./modules/colors";
export { CursorModuleType, CursorSupportedTypes } from "./modules/cursor";
export { DisplayModuleType, DisplaySupportedTypes } from "./modules/display";
export { FlexBoxModuleType, FlexBoxSupportedTypes } from "./modules/flexbox";
export { FloatModuleType, FloatSupportedTypes } from "./modules/float";
export { FontModuleType, FontSupportedTypes } from "./modules/font";
export { HeightModuleType, HeightSupportedTypes } from "./modules/height";
export {
  LetterSpacingModuleType,
  LetterSpacingSupportedTypes,
} from "./modules/letter-spacing";
export {
  LineHeightModuleType,
  LineHeightSupportedTypes,
} from "./modules/line-height";
export {
  ListStyleModuleType,
  ListStyleSupportedTypes,
} from "./modules/list-style";
export { OpacityModuleType, OpacitySupportedTypes } from "./modules/opacity";
export { OutlineModuleType, OutlineSupportedTypes } from "./modules/outline";
export { OverflowModuleType, OverflowSupportedTypes } from "./modules/overflow";
export {
  PointerEventsModuleType,
  PointerEventsSupportedTypes,
} from "./modules/pointer-events";
export { PositionModuleType, PositionSupportedTypes } from "./modules/position";
export { ResizeModuleType, ResizeSupportedTypes } from "./modules/resize";
export { SeriesModuleType } from "./modules/series";
export { SingleModuleType } from "./modules/single";
export { SpacingModuleType, SpacingSupportedTypes } from "./modules/spacing";
export {
  TextAlignModuleType,
  TextAlignSupportedTypes,
} from "./modules/text-align";
export {
  TextDecorationModuleType,
  TextDecorationSupportedTypes,
} from "./modules/text-decoration";
export {
  TextOverflowModuleType,
  TextOverflowSupportedTypes,
} from "./modules/text-overflow";
export {
  TextTransformModuleType,
  TextTransformSupportedTypes,
} from "./modules/text-transform";
export {
  TransformModuleType,
  TransformSupportedTypes,
} from "./modules/transform";
export {
  TransitionModuleType,
  TransitionSupportedTypes,
} from "./modules/transition";
export {
  VerticalAlignModuleType,
  VerticalAlignSupportedTypes,
} from "./modules/vertical-align";
export {
  VisibilityModuleType,
  VisibilitySupportedTypes,
} from "./modules/visibility";
export {
  WhiteSpaceModuleType,
  WhiteSpaceSupportedTypes,
} from "./modules/white-space";
export { WidthModuleType, WidthSupportedTypes } from "./modules/width";
export {
  UserSelectModuleType,
  UserSelectSupportedTypes,
} from "./modules/user-select";
export { ZIndexModuleType, ZIndexSupportedTypes } from "./modules/z-index";

export interface PluginConfig {
  config: GlobalUtilityConfig;
  forceInsert?: boolean;
  modules: any[];
  plugins: any[];
}
