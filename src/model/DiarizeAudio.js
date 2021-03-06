/**
 * DeepAffects
 * OpenAPI Specification of DeepAffects APIs
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

 var fs = require('fs');
 var is = require('is');
 var path = require('path');
 var utils = require('./utils');

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DeepAffects) {
      root.DeepAffects = {};
    }
    root.DeepAffects.DiarizeAudio = factory(root.DeepAffects.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DiarizeAudio model module.
   * @module model/DiarizeAudio
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DiarizeAudio</code>.
   * @alias module:model/DiarizeAudio
   * @class
   * @param encoding {String} Encoding of audio file like MP3, WAV etc.
   * @param sampleRate {Number} Sample rate of the audio file.
   * @param languageCode {String} Language spoken in the audio file.
   * @param content {String} base64 encoding of the audio file.
   * @param speakers {Number} Number of speakers in the file (-1 for unknown speakers)
   * @param audioType {String} One of the following values: meeting, callcentre, podcast, healthcare
   * @param mergeSegments {Boolean} Whether to merge consecutive segments of the same speaker together
   */
  var exports = function(encoding, sampleRate, languageCode, content, speakers, audioType, mergeSegments) {
    var _this = this;

    _this['encoding'] = encoding;
    _this['sampleRate'] = sampleRate;
    _this['languageCode'] = languageCode;
    _this['content'] = content;
    _this['speakers'] = speakers;
    _this['audioType'] = audioType;
    _this['vad'] = mergeSegments;
  };

  /**
   * Constructs a <code>DiarizeAudio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiarizeAudio} obj Optional instance to populate.
   * @return {module:model/DiarizeAudio} The populated <code>DiarizeAudio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
      if (data.hasOwnProperty('sampleRate')) {
        obj['sampleRate'] = ApiClient.convertToType(data['sampleRate'], 'Number');
      }
      if (data.hasOwnProperty('languageCode')) {
        obj['languageCode'] = ApiClient.convertToType(data['languageCode'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('speakers')) {
        obj['speakers'] = ApiClient.convertToType(data['speakers'], 'Number');
      }
      if (data.hasOwnProperty('audioType')) {
        obj['audioType'] = ApiClient.convertToType(data['audioType'], 'String');
      }
      if (data.hasOwnProperty('vad')) {
        obj['vad'] = ApiClient.convertToType(data['vad'], 'Boolean');
      }
    }
    return obj;
  }

  exports.fromFile = function(file, encoding, sampleRate, languageCode, speakers, audioType, mergeSegments) {
    var exp = new exports();
    exp['encoding'] = utils.detectEncoding(file);
    exp['sampleRate'] = utils.defaultFor(sampleRate, 8000);
    exp['languageCode'] = utils.defaultFor(languageCode, 'en-US');
    exp['content'] = utils.findFile(file).toString('base64');
    exp['speakers'] = utils.defaultFor(speakers, -1);
    exp['audioType'] = utils.defaultFor(audioType, 'meeting');
    exp['vad'] = utils.defaultFor(mergeSegments, true);
    return exp;
  }


  /**
   * Encoding of audio file like MP3, WAV etc.
   * @member {String} encoding
   */
  exports.prototype['encoding'] = undefined;
  /**
   * Sample rate of the audio file.
   * @member {Number} sampleRate
   */
  exports.prototype['sampleRate'] = undefined;
  /**
   * Language spoken in the audio file.
   * @member {String} languageCode
   * @default 'en-US'
   */
  exports.prototype['languageCode'] = 'en-US';
  /**
   * base64 encoding of the audio file.
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Number of speakers in the file (-1 for unknown speakers)
   * @member {Number} speakers
   * @default -1
   */
  exports.prototype['speakers'] = -1;

  /**
   * Type of the audio file: one of the following: meeting, podcast, healthcare, callcentre
   * @member {String} speakers
   * @default 'meeting'
   */
  exports.prototype['audioType'] = 'meeting';

  /**
   * Whether to merge the consecutive segments of the same speaker together
   * @member {Boolean} vad
   * @default true
   */
  exports.prototype['vad'] = true;



  return exports;
}));
