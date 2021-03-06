/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
'use strict';

var pdfjsVersion = '2.1.1';
var pdfjsBuild = '7d7bc80e';
var pdfjsSharedUtil = require('./shared/util.js');
var pdfjsDisplayAPI = require('./display/api.js');
var pdfjsDisplayTextLayer = require('./display/text_layer.js');
var pdfjsDisplayAnnotationLayer = require('./display/annotation_layer.js');
var pdfjsDisplayDOMUtils = require('./display/dom_utils.js');
var pdfjsDisplaySVG = require('./display/svg.js');
var pdfjsDisplayWorkerOptions = require('./display/worker_options.js');
var pdfjsDisplayAPICompatibility = require('./display/api_compatibility.js');

var PDFNodeStream = require('./display/node_stream.js').PDFNodeStream;
pdfjsDisplayAPI.setPDFNetworkStreamFactory(function(params) {
  return new PDFNodeStream(params);
});

exports.build = pdfjsDisplayAPI.build;
exports.version = pdfjsDisplayAPI.version;
exports.getDocument = pdfjsDisplayAPI.getDocument;
exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
exports.OPS = pdfjsSharedUtil.OPS;
exports.VerbosityLevel = pdfjsSharedUtil.VerbosityLevel;
exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
exports.shadow = pdfjsSharedUtil.shadow;
exports.createBlob = pdfjsSharedUtil.createBlob;
exports.Util = pdfjsSharedUtil.Util;
exports.RenderingCancelledException = pdfjsDisplayDOMUtils.RenderingCancelledException;
exports.getFilenameFromUrl = pdfjsDisplayDOMUtils.getFilenameFromUrl;
exports.LinkTarget = pdfjsDisplayDOMUtils.LinkTarget;
exports.addLinkAttributes = pdfjsDisplayDOMUtils.addLinkAttributes;
exports.GlobalWorkerOptions = pdfjsDisplayWorkerOptions.GlobalWorkerOptions;
exports.apiCompatibilityParams = pdfjsDisplayAPICompatibility.apiCompatibilityParams;
