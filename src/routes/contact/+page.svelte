<script lang="ts">
    import emailjs from 'emailjs-com';
    /* import { validateForm } from "$lib/component/formValidator"; */
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
      columns: 2;;
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

    .box1{
    display: flex;
    flex-direction: column;
    width: 45%;
    justify-content: space-between;
  }
  .box2{
    display: flex;
    flex-direction: column;
    width: 45%;
    justify-content: space-between;
  }

  .mainbox {
    display: flex;
    flex-direction: row;
    width: 65%;
    justify-content: space-around;
  }

  .additionalInfo {
    height: 88px;
  }

  input {
    font-family: inherit;
  }

  textarea {
    font-family: inherit;
  }

  </style>
  
<div class="page">
<h1 style="font-size: 3rem; color: red; font-weight: 900; margin-top: 50px; text-align: center; font-family: Poppins;" class="Contact-title: font:poppins;">Contact Us</h1>
<form on:submit|preventDefault={sendContactForm} style="margin-top: 65px;">
  <div class="mainbox" style="display: flex; justify-content: center; gap: 200px;">
    <div class="box1" style=" margin-top: 15px;" >
      <label for="name" style="font-size: small; font-weight: 600;">Name</label>
      <input style="width: 300px; border: 1px solid #efefef; margin-top: 10px; height: 20px; margin-top: 10px; margin-bottom: 10px;" id="name" class="name" type="text" bind:value={name} required />
  
      <label style="font-size: small; font-weight: 600; margin-top: 10px;" for="contact" class="contact">Email</label>
      <input style="width: 300px; border: 1px solid #efefef; margin-top: 10px; height: 20px; margin-bottom: 10px;" id="contact" class="contact" type="tel" bind:value={email} required />
  
      <label style="font-size: small; font-weight: 600; margin-top: 10px;" for="address" class="address">Phone Number</label>
      <input style="width: 300px; border: 1px solid #efefef; margin-top: 10px; height: 20px;" id="address" class="address" type="text" bind:value={phoneNumber} required />
    </div>
    <div class="box2">
      <label for="assistance" class="assistance" style="font-size: small; font-weight: 600;">Type of Assistance</label>
      <select style="width: 300px; padding: 8px; border-radius: 5px; font-family: inherit; font-size: small; border: 1px solid #efefef;" id="assistance" class="assistance" bind:value={reason} required>
        <option value="">Select Assistance Type</option>
        <option value="fire">Fire Emergency</option>
        <option value="flood">Flooded</option>
        <option value="rescue">Rescue</option>
        <!-- Add more options as needed -->
      </select>
      <label for="additionalInfo" class="" style="font-size: small; font-weight: 600; margin-top: 10px;"> Additional Information</label>
      <textarea style="width: 283px; border: 1px solid #efefef;" id="additionalInfo" class="additionalInfo" bind:value={additionalInfo}></textarea>
    </div>
  </div>
  <div style="display: flex; justify-content: center;">
    <button type="submit" class="submit" style=" margin-top: 30px; font-family: inherit; padding: 10px; width: 200px; border-radius: 15px; background-color: transparent; border: 2px solid red; color: red; font-weight: bold; ">Submit</button>
  </div>
</form>
</div>