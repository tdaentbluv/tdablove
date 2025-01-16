interface SplunkEvent {
  event: any;
  sourcetype?: string;
  source?: string;
  index?: string;
  time?: number;
}

export const sendToSplunk = async (data: any): Promise<Response> => {
  const event: SplunkEvent = {
    event: data,
    sourcetype: 'tda:contact:form',
    source: 'website_contact_form',
    index: 'tdacontact',
    time: Math.floor(Date.now() / 1000)
  };

  return fetch('http://localhost:8088/services/collector', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '39aef26f-a379-4326-a3a2-665cdb58f514'
    },
    body: JSON.stringify(event)
  });
};
