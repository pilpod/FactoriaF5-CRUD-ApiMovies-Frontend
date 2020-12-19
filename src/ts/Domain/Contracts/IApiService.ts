///<reference path="../../Infrastructure/Api/Api.ts" />

namespace Contract {

    export interface ExternalApiData {

        CallApi(tmdb:Api.ApiMovie): any;

    }


}