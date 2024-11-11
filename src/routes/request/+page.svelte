<script lang="ts">
    import emailjs from 'emailjs-com';

    let name = '';
    let contactNumber = '';
    let address = '';
    let assistanceType = '';
    let additionalInfo = '';
  
    const sendRequest = () => { 
      const templateParams = { 
        name,
        contact_number: contactNumber,
        address,
        assistance_type: assistanceType,
        additional_info: additionalInfo
      };
  
      emailjs
        .send('service_giszsoc', 'template_p6rsl64', templateParams, 'OuDODiG6WJZhN7dX7')
        .then((response) => {
          alert('Request sent successfully!');
        })
        .catch((error) => {
          console.error('Failed to send request:', error);
          alert('Failed to send request.');
        });
    };
  </script>
  
  <style>
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 600px;
      margin: auto;
      font-family: poppins;
    }
    label {
      font-weight: bold;
    }
    input, select, textarea {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
    }
    button {
      background-color: #28a745;
      color: white;
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #218838;
    }

    .Request-title {
      font-family: poppins;
      font-weight: bolder;
      font-size: 36px;
      text-align: center;
      text-shadow:#333;
    }
  </style>
  
  <h1 class="Request-title">Request Aid</h1>
  <form on:submit|preventDefault={sendRequest} class="font-poppins">
    <label for="name">Name</label>
    <input id="name" type="text" bind:value={name} required />
  
    <label for="contact">Contact Number</label>
    <input id="contact" type="tel" bind:value={contactNumber} required />
  
    <label for="address">Address</label>
    <input id="address" type="text" bind:value={address} required />
  
    <label for="assistance">Type of Assistance Needed</label>
    <select id="assistance" bind:value={assistanceType} required>
      <option value="">Select assistance type</option>
      <option value="fire">Fire Emergency</option>
      <option value="flood">Flooded</option>
      <option value="rescue">Rescue</option>
      <!-- Add more options as needed -->
    </select>
  
    <label for="additionalInfo">Additional Information</label>
    <textarea id="additionalInfo" bind:value={additionalInfo}></textarea>
  
    <button type="submit" class="submit">Submit</button>
  </form>
  