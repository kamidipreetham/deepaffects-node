/**
 * DeepAffects
 * OpenAPI Specification of DeepAffects APIs
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

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
        root.DeepAffects.AudioFeatures = factory(root.DeepAffects.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';




    /**
     * The AudioFeatures model module.
     * @module model/AudioFeatures
     * @version 0.1.0
     */

    /**
     * Constructs a new <code>AudioFeatures</code>.
     * @alias module:model/AudioFeatures
     * @class
     * @param mfccs {Array.<Array.<Number>>} mel frequency cepstral coefficients
     * @param zcr {Array.<Number>} zero crossing rate
     * @param energy {Array.<Number>} energy
     */
    var exports = function(mfccs, zcr, energy) {
        var _this = this;

        _this['mfccs'] = mfccs;
        _this['zcr'] = zcr;
        _this['energy'] = energy;
    };

    /**
     * Constructs a <code>AudioFeatures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AudioFeatures} obj Optional instance to populate.
     * @return {module:model/AudioFeatures} The populated <code>AudioFeatures</code> instance.
     */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();

            if (data.hasOwnProperty('mfccs')) {
                obj['mfccs'] = ApiClient.convertToType(data['mfccs'], [['Number']]);
            }
            if (data.hasOwnProperty('zcr')) {
                obj['zcr'] = ApiClient.convertToType(data['zcr'], ['Number']);
            }
            if (data.hasOwnProperty('energy')) {
                obj['energy'] = ApiClient.convertToType(data['energy'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * mel frequency cepstral coefficients
     * @member {Array.<Array.<Number>>} mfccs
     */
    exports.prototype['mfccs'] = undefined;
    /**
     * zero crossing rate
     * @member {Array.<Number>} zcr
     */
    exports.prototype['zcr'] = undefined;
    /**
     * energy
     * @member {Array.<Number>} energy
     */
    exports.prototype['energy'] = undefined;



    return exports;
}));


