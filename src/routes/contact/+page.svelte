<script lang="ts">
    import emailjs from 'emailjs-com';
    import { validateForm } from "$lib/component/formValidator";
    let name = '';
    let email = '';
    let phoneNumber = '';
    let reason = '';
    let additionalInfo = '';
  
    const sendContactForm = () => {
      const templateParams = {
        name,
        email,
        phone_number: phoneNumber,
        reason,
        additional_info: additionalInfo
      };
  
      emailjs
        .send('service_giszsoc', 'template_p6rsl64', templateParams, 'OuDODiG6WJZhN7dX7')
        .then((response) => {
          alert('Message sent successfully!');
        })
        .catch((error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message.');
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
    input, textarea {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
    }
    button {
      background-color: #007bff;
      color: white;
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }

    .Contact-title {
      font-family: poppins;
      font-weight: bolder;
      font-size: 36px;
      text-align: center;
      text-shadow: #333;
    }
  </style>
  
  <h1 class="Contact-title">Contact Us</h1>
  <form on:submit|preventDefault={sendContactForm} class="w-screen h-screen">
    <label for="name">Name</label>
    <input id="name" type="text" bind:value={name} required />
  
    <label for="email">Email</label>
    <input id="email" type="email" bind:value={email} required />
  
    <label for="phone">Phone Number</label>
    <input id="phone" type="tel" bind:value={phoneNumber} />
  
    <label for="reason">Reason for Contact</label>
    <textarea id="reason" bind:value={reason}></textarea>
  
    <label for="additionalInfo">Additional Information</label>
    <textarea id="additionalInfo" bind:value={additionalInfo}></textarea>
  
    <button type="submit">Submit</button>
  </form>
  