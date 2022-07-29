class Configuration {
    constructor ( key, defaultValue ){
        this.key = key;
        this.defaultValue = defaultValue;
    }
};

export const BACKGROUND_FOLDER = new Configuration("background_folder", "rdr2");
export const WEATHER_CODES = new Configuration("weather_codes", "");
