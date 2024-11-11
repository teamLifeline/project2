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
    align-items: center;
    justify-content: center;
    margin: 0, 20px, 0, 20px;
    font-family: poppins;
    height: fit-content;
  }
  label {
    font-weight: bold;
  }
  input, select, textarea {
    padding: 0.5rem;
    border: 1px solid #8B0000;
    border-radius: 5px;
    width: full;
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

  .name {
    display: flex;
    grid-gap: 1rem; 
    grid-template-columns: repeat(3, 1fr);
    justify-content: flex-start;
    align-items: flex-start;
  }

  .Request-title {
    font-family: poppins;
    font-weight: bolder;
    font-size: 36px;
    text-align: center;
    text-shadow:#333;
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
<h1 style="font-size: 3rem; color: red; font-weight: 900; margin-top: 50px;" class="Request-title">Request Assistance</h1>
<form on:submit|preventDefault={sendRequest} style="margin-top: 65px;">
  <div class="mainbox">
    <div class="box1" style="margin-top: 15px;" >
      <label for="name" style="font-size: small; font-weight: 600;">Name</label>
      <input style="border: 1px solid #efefef; margin-top: 10px; height: 20px; margin-top: 10px; margin-bottom: 10px;" id="name" class="name" type="text" bind:value={name} required />
  
      <label style="font-size: small; font-weight: 600; margin-top: 10px;" for="contact" class="contact">Contact Number</label>
      <input style="border: 1px solid #efefef; margin-top: 10px; height: 20px; margin-bottom: 10px;" id="contact" class="contact" type="tel" bind:value={contactNumber} required />
  
      <label style="font-size: small; font-weight: 600; margin-top: 10px;" for="address" class="address">Address</label>
      <input style="border: 1px solid #efefef; margin-top: 10px; height: 20px;" id="address" class="address" type="text" bind:value={address} required />
    </div>
    <div class="box2">
      <label for="assistance" class="assistance" style="font-size: small; font-weight: 600;">Type of Assistance</label>
      <select style="font-family: inherit; font-size: small; border: 1px solid #efefef; margin-top: 10px;" id="assistance" class="assistance" bind:value={assistanceType} required>
        <option value="">Select Assistance Type</option>
        <option value="fire">Fire Emergency</option>
        <option value="flood">Flooded</option>
        <option value="rescue">Rescue</option>
        <!-- Add more options as needed -->
      </select>
      <label for="additionalInfo" class="" style="font-size: small; font-weight: 600; margin-top: 10px;"> Additional Information</label>
      <textarea style="border: 1px solid #efefef; margin-top: 10px;" id="additionalInfo" class="additionalInfo" bind:value={additionalInfo}></textarea>
    </div>
  </div>
  <button type="submit" class="submit" style="margin-top: 30px; font-family: inherit; padding: 10px; width: 200px; border-radius: 15px; background-color: transparent; border: 2px solid red; color: red; font-weight: bold; ">Submit</button>
</form>
</div>