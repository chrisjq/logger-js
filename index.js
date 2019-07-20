"use strict";
import {
  OFF as OFFC,
  SEVERE as SEVEREC,
  WARNING as WARNINGC,
  INFO as INFOC,
  CONFIG as CONFIGC,
  FINE as FINEC,
  FINER as FINERC,
  FINEST as FINESTC,
  ALL as ALLC,
} from "./src/Logger.js";
import Logger from "./src/Logger.js";
export const Log = new Logger();

export const OFF = OFFC;
export const SEVERE = SEVEREC;
export const WARNING = WARNINGC;
export const INFO = INFOC;
export const CONFIG = CONFIGC;
export const FINE = FINEC;
export const FINER = FINERC;
export const FINEST = FINESTC;
export const ALL = ALLC;

export default {
  Logger,
  Log,
  OFF,
  SEVERE,
  WARNING,
  INFO,
  CONFIG,
  FINE,
  FINER,
  FINEST,
  ALL,
};
