interface SplunkEvent {
  name: string;
  data: Record<string, unknown>;
}

export const sendToSplunk = async (data: Record<string, unknown>): Promise<Response> => {
  const event: SplunkEvent = {
    name: 'tda:contact:form',
    data,
  };

  try {
    return await fetch('http://localhost:8088/services/collector', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '39aef26f-a379-4326-a3a2-665cdb58f514'
      },
      body: JSON.stringify(event)
    });
  } catch (error) {
    console.error('Failed to send to Splunk:', error);
  }
};
