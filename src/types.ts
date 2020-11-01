type GenericObjectKeys = number | string;
export type GenericObject = {
  [key in GenericObjectKeys]: string | number;
};

export type PseudoClass = ":hover" | ":focus";

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
