import React, { useState } from 'react';

const CreateCampaign = () => {
  const [campaignName, setCampaignName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const campaignData = {
      name: campaignName,
      start: startDate,
      end: endDate,
      budget: budget,
    };

    fetch('/create-campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Crear Campaña Publicitaria</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nombre de la Campaña:
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha de Inicio:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha de Finalización:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Presupuesto Diario:
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Crear Campaña</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
