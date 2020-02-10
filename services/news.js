import request from "../utils/request";

const getNewService = () => {
  return request({
    url: "/news/isActive",
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlJPTEVfQ0g_TkggUz9BIE1BSUxURU1QTEFURSxST0xFX0NIP05IIFM_QSBNRU5VLFJPTEVfQ0g_TkggUz9BIE1FTlVJVEVNLFJPTEVfQ0g_TkggUz9BIFBBR0UsUk9MRV9DSD9OSCBTP0EgU0xJREVSLFJPTEVfQ0g_TkggUz9BIFRIPyBNP0MsUk9MRV9DSD9OSCBTP0EgVElOIFQ_QyxST0xFX0NIP05IIFM_QSBWPyBUUsONIE1FTlVJVEVNLFJPTEVfQ0g_TkggUz9BIFY_IFRSw40gUEFHRSxST0xFX0NIP05IIFM_QSBWPyBUUsONIFRIPyBNP0MsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRVhDSEFOR0VfUkFURSxST0xFX0RFTEVURSBJTlRFUkVTVF9SQVRFLFJPTEVfREVMRVRFIE1BSUxURU1QTEFURSxST0xFX0RFTEVURSBNRU5VLFJPTEVfREVMRVRFIE1FTlVJVEVNLFJPTEVfREVMRVRFIE5FVFdPUktTLFJPTEVfREVMRVRFIE5FV1MsUk9MRV9ERUxFVEUgUEFHRSxST0xFX0RFTEVURSBTTElERVIsUk9MRV9FRElUIENBVEVHT1JZLFJPTEVfRURJVCBFWENIQU5HRV9SQVRFLFJPTEVfRURJVCBJTlRFUkVTVF9SQVRFLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FTlUsUk9MRV9FRElUIE1FTlVJVEVNLFJPTEVfRURJVCBORVRXT1JLUyxST0xFX0VESVQgTkVXUyxST0xFX0VESVQgUEFHRSxST0xFX0VESVQgU0xJREVSLFJPTEVfR0VUIENBVEVHT1JZLFJPTEVfR0VUIEVYQ0hBTkdFX1JBVEUsUk9MRV9HRVQgSU5URVJFU1RfUkFURSxST0xFX0dFVCBNQUlMVEVNUExBVEUsUk9MRV9HRVQgTUVOVSxST0xFX0dFVCBNRU5VSVRFTSxST0xFX0dFVCBORVRXT1JLUyxST0xFX0dFVCBORVdTLFJPTEVfR0VUIFBBR0UsUk9MRV9HRVQgU0xJREVSLFJPTEVfUz9BIEzDg0kgU1U_VCxST0xFX1M_QSBNP05HIEw_P0ksUk9MRV9TP0EgVD8gR0nDgSxST0xFX1Q_TyBMw4NJIFNVP1QsUk9MRV9UP08gTT9ORyBMPz9JLFJPTEVfVD9PIE1BSUxURU1QTEFURSxST0xFX1Q_TyBNRU5VLFJPTEVfVD9PIE1FTlVJVEVNLFJPTEVfVD9PIFBBR0UsUk9MRV9UP08gU0xJREVSLFJPTEVfVD9PIFQ_IEdJw4EsUk9MRV9UP08gVEg_IE0_QyxST0xFX1Q_TyBUSU4gVD9DLFJPTEVfVVBEQVRFIFBPU0lUSU9OIENBVEVHT1JZLFJPTEVfVVBEQVRFIFBPU0lUSU9OIE1FTlVJVEVNLFJPTEVfVVBEQVRFIFBPU0lUSU9OIFBBR0UsUk9MRV9YRU0gTMODSSBTVT9ULFJPTEVfWEVNIE0_TkcgTD8_SSxST0xFX1hFTSBNQUlMVEVNUExBVEUsUk9MRV9YRU0gTUVOVSxST0xFX1hFTSBNRU5VSVRFTSxST0xFX1hFTSBQQUdFLFJPTEVfWEVNIFNMSURFUixST0xFX1hFTSBUPyBHScOBLFJPTEVfWEVNIFRIPyBNP0MsUk9MRV9YRU0gVElOIFQ_QyxST0xFX1jDk0EgTMODSSBTVT9ULFJPTEVfWMOTQSBNP05HIEw_P0ksUk9MRV9Yw5NBIE1BSUxURU1QTEFURSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVD8gR0nDgSxST0xFX1jDk0EgVEg_IE0_QyxST0xFX1jDk0EgVElOIFQ_QyxhZG1pbixxdeG6o24gdHLhu4siLCJpYXQiOjE1NzkxNTc4MjIsImV4cCI6MTU4MTc0OTgyMn0.qTTKj9sCgukgQ3BNsgobL34O9wuGpEZVHQNd8qtHo14"
    }
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getNewByUri = uri => {
  return request({
    url: `/news/url/${uri}`,
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlJPTEVfQ0g_TkggUz9BIE1BSUxURU1QTEFURSxST0xFX0NIP05IIFM_QSBNRU5VLFJPTEVfQ0g_TkggUz9BIE1FTlVJVEVNLFJPTEVfQ0g_TkggUz9BIFBBR0UsUk9MRV9DSD9OSCBTP0EgU0xJREVSLFJPTEVfQ0g_TkggUz9BIFRIPyBNP0MsUk9MRV9DSD9OSCBTP0EgVElOIFQ_QyxST0xFX0NIP05IIFM_QSBWPyBUUsONIE1FTlVJVEVNLFJPTEVfQ0g_TkggUz9BIFY_IFRSw40gUEFHRSxST0xFX0NIP05IIFM_QSBWPyBUUsONIFRIPyBNP0MsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRVhDSEFOR0VfUkFURSxST0xFX0RFTEVURSBJTlRFUkVTVF9SQVRFLFJPTEVfREVMRVRFIE1BSUxURU1QTEFURSxST0xFX0RFTEVURSBNRU5VLFJPTEVfREVMRVRFIE1FTlVJVEVNLFJPTEVfREVMRVRFIE5FVFdPUktTLFJPTEVfREVMRVRFIE5FV1MsUk9MRV9ERUxFVEUgUEFHRSxST0xFX0RFTEVURSBTTElERVIsUk9MRV9FRElUIENBVEVHT1JZLFJPTEVfRURJVCBFWENIQU5HRV9SQVRFLFJPTEVfRURJVCBJTlRFUkVTVF9SQVRFLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FTlUsUk9MRV9FRElUIE1FTlVJVEVNLFJPTEVfRURJVCBORVRXT1JLUyxST0xFX0VESVQgTkVXUyxST0xFX0VESVQgUEFHRSxST0xFX0VESVQgU0xJREVSLFJPTEVfR0VUIENBVEVHT1JZLFJPTEVfR0VUIEVYQ0hBTkdFX1JBVEUsUk9MRV9HRVQgSU5URVJFU1RfUkFURSxST0xFX0dFVCBNQUlMVEVNUExBVEUsUk9MRV9HRVQgTUVOVSxST0xFX0dFVCBNRU5VSVRFTSxST0xFX0dFVCBORVRXT1JLUyxST0xFX0dFVCBORVdTLFJPTEVfR0VUIFBBR0UsUk9MRV9HRVQgU0xJREVSLFJPTEVfUz9BIEzDg0kgU1U_VCxST0xFX1M_QSBNP05HIEw_P0ksUk9MRV9TP0EgVD8gR0nDgSxST0xFX1Q_TyBMw4NJIFNVP1QsUk9MRV9UP08gTT9ORyBMPz9JLFJPTEVfVD9PIE1BSUxURU1QTEFURSxST0xFX1Q_TyBNRU5VLFJPTEVfVD9PIE1FTlVJVEVNLFJPTEVfVD9PIFBBR0UsUk9MRV9UP08gU0xJREVSLFJPTEVfVD9PIFQ_IEdJw4EsUk9MRV9UP08gVEg_IE0_QyxST0xFX1Q_TyBUSU4gVD9DLFJPTEVfVVBEQVRFIFBPU0lUSU9OIENBVEVHT1JZLFJPTEVfVVBEQVRFIFBPU0lUSU9OIE1FTlVJVEVNLFJPTEVfVVBEQVRFIFBPU0lUSU9OIFBBR0UsUk9MRV9YRU0gTMODSSBTVT9ULFJPTEVfWEVNIE0_TkcgTD8_SSxST0xFX1hFTSBNQUlMVEVNUExBVEUsUk9MRV9YRU0gTUVOVSxST0xFX1hFTSBNRU5VSVRFTSxST0xFX1hFTSBQQUdFLFJPTEVfWEVNIFNMSURFUixST0xFX1hFTSBUPyBHScOBLFJPTEVfWEVNIFRIPyBNP0MsUk9MRV9YRU0gVElOIFQ_QyxST0xFX1jDk0EgTMODSSBTVT9ULFJPTEVfWMOTQSBNP05HIEw_P0ksUk9MRV9Yw5NBIE1BSUxURU1QTEFURSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVD8gR0nDgSxST0xFX1jDk0EgVEg_IE0_QyxST0xFX1jDk0EgVElOIFQ_QyxhZG1pbixxdeG6o24gdHLhu4siLCJpYXQiOjE1NzkxNTc4MjIsImV4cCI6MTU4MTc0OTgyMn0.qTTKj9sCgukgQ3BNsgobL34O9wuGpEZVHQNd8qtHo14"
    }
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export { getNewService, getNewByUri };
