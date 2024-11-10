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
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
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
  </style>
  
  <h1>Request Aid</h1>
  <form on:submit|preventDefault={sendRequest}>
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
  
    <button type="submit">Submit</button>
  </form>
  