<!-- put welcome page here --><script lang="ts">
	import Footer from "$lib/component/Footer.svelte";

    let text1 = "News";
    let text2 = "Article";
	let youtubeUrls = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video 1
    "https://www.youtube.com/embed/VIDEO_ID_2", // Video 2
    "https://www.youtube.com/embed/VIDEO_ID_3", // Video 3
	];
	
		let currentVideoIndex = 0; // Current video index

		// Function to set the current video based on the dot clicked
		function selectVideo(index: number) {
			currentVideoIndex = index;
		}

  	  	let articleUrl = "https://news.abs-cbn.com/"; // Replace with your article link
    
  </script>

<style>
	/* Main container for the background images and overlay */
	.disaster-section {
	  position: relative;
	  width: 100%;
	  height: 500px; /* Adjust as necessary */
	  display: flex;
	  flex-direction: row;
	  background-color: #333; /* Fallback color */
	  overflow: hidden;
      
	}
  
	/* Background images grid */
	.images-container {
	  display: flex;
	  width: 100%;
	  border: none;
	}
	
	.image {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	}

	.image1 {
		width: 49.6%;
		height: 50%;
		object-fit: cover;
	}

	/* Text overlay */
	.overlay {
	  position: absolute;
	  top: 0;
	  left: 0;
	  padding: 20px;
	  color: white;
	  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
	  font-size: 24px;
	  width: 100%;
	  height: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: left;
	  background: rgba(0, 0, 0, 0.5);
      font-family: poppins;
	}
  
	.title {
	  font-size: 46px;
	  font-weight: bold;
	  text-align: left;
      font-family: poppins;
	}
  
	.highlight {
	  color: #E74C3C; /* Red color for emphasis */
	}
  
	.text {
	  max-width: 600px;
      font-family: poppins;
	  font-size: 20px;
	  text-shadow:#333;
	}

	.text-highlight {
	  color: #E74C3C; /* Blue color for emphasis */
	}

    .news {
	background-color: #8B0000;
	size: full;
	padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
	justify-content: center;
	color: white;
	font-family: poppins;
	font-weight: Bolder;
	font-size: 36px;
  	}

  	.column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
	text-align: center;
  	}

	.video-container iframe,
	.link-container a {
    width: 75%;
	size: full	;
	height: 400px;
	object-fit: cover;
	border: none;
	overflow: hidden;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  	}

	.video-container iframe {
    width: 100%;
    height: 400px; /* Adjust height as needed */
  	}
	.pagination-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	.dot {
		width: 12px;
		height: 14px;
		background-color: #ccc;
		cursor: pointer;
	}
	.dot.active {
		background-color: #0073e6; /* Active dot color */
	}

	.EmergencyKit-container {
    background-color: #fff;
    text-align: center;
    padding: 1rem;
    font-family: 'Poppins', sans-serif;
	}

	.EmergencyKit-title {
		font-size: 36px;
		font-weight: bold;
		color: #8B0000;
		padding-bottom: 1rem;
	}

	.Kits {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 1rem;
		padding: 1rem;
		color: #fff;
	}

	.emergency-kit-text {
		justify-content: center;
		text-align: center;
        line-height: 1.6;
        padding: 0 10px; /* Adjust as needed for spacing */
    }

	.grid-item {
		padding: 1rem;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: normal;
		height: 270px; /* Make the items square */
	}

	.icon {
		font-size: 85px;
		margin-bottom: 0.5rem;
		color: #fff;
		padding-bottom: 5%;
	}
	


  </style>
  
  <div class="disaster-section">
	<!-- Background Images in Grid -->
	<div class="images-container h-screen w-screen">
	  <img src="images/Bicol.webp" alt="Disaster 1" class="image w-[50%]" />
		<div class="grid grid-cols-2 w-[50%] border-none">
			<img src="images/kristine1.jpg" alt="Disaster 2" class="image1 row-start-1 col-start-1"/>
			<img src="images/kristine2.jpg" alt="Disaster 3" class="image1 row-start-1 col-start-2"/>
			<img src="images/kristine3.jpg" alt="Disaster 4" class="image1 row-start-2 col-start-1"/>
			<img src="images/kristine4.jpg" alt="Distater 5" class="image1 row-start-2 col-start-2"/>
		</div>
	</div>
  
	<!-- Overlay Text -->
	<div class="overlay">
	  <div class="title">You can make a <span class="highlight">Difference</span></div>
	  <div class="text antialiased text-balance">
		Flooding and other natural disasters often strike with little warning, leaving behind significant damage, loss of life, and disruption. But with the right resources and proactive steps, these impacts can be mitigated. <span class="text-highlight"> Our disaster readiness application empowers individuals and communities to prepare, respond, and recover more effectively.</span>By offering vital information, emergency contacts, and practical guidance, our platform enables everyone to play a role in disaster prevention. Together, we can take meaningful actions that reduce risks, protect lives, and safeguard property—because every effort, big or small, truly makes a difference.
	  </div>
	</div>
  </div>

  <div class="news size-full md:size-auto">
    <div class="column">{text1}
		<div class="video-container content-center">
			<iframe 
			src={youtubeUrls[currentVideoIndex]} 
			title="YouTube video player"
			frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen
			></iframe>
		</div>

		<!-- Pagination Dots -->
		<div class="pagination-dots">
			{#each youtubeUrls as _, index (index)}
			<button 
				type="button"
				class="dot {index === currentVideoIndex ? 'active' : ''}" 
				on:click={() => selectVideo(index)}
				on:keydown={(e) => e.key === 'Enter' && selectVideo(index)}
				aria-label="Select video {index + 1}"
			></button>
			{/each}
		</div>

	</div>

    <div class="column">{text2}
		<div class="link-container content-center">
			<a href={articleUrl} target="_blank" rel="noopener noreferrer">
			click the link
			</a>
		</div>
	</div>
  </div>

	
	<div class="EmergencyKit-container">
		<div class="EmergencyKit-title">
		  10 Essentials for your Emergency Kit
		</div>
		<p class="emergency-kit-text">
			In times of crisis, having a well-prepared emergency kit can be the difference between staying safe and facing unnecessary risks.
			<br> Our guide to the <span class="text-highlight"> "10 Essentials for Your Emergency Kit" </span> highlights the must-have items to keep you and your loved ones ready <br> for any situation. From food and water to first aid and communication tools, these essentials ensure you’re equipped to handle the unexpected <br> with confidence and resilience.
		</p>
		
		<div class="Kits">
		  <div class="grid-item" style="background-color: #7E1616;">
			<i class="fas fa-utensils icon"></i>
			Non-perishable food & water
		  </div>
		  <div class="grid-item" style="background-color: #8C043C;">
			<i class="fas fa-battery-full icon"></i>
			Flashlight & extra batteries
		  </div>
		  <div class="grid-item" style="background-color: #FF440A;">
			<i class="fas fa-first-aid icon"></i>
			First aid kit
		  </div>
		  <div class="grid-item" style="background-color: #FF8916;">
			<i class="fas fa-hand-sparkles icon"></i>
			Sanitation & Hygiene supplies
		  </div>
		  <div class="grid-item" style="background-color: #FFC215;">
			<i class="fas fa-bed icon"></i>
			Sleeping bags & warm blankets
		  </div>
		  <div class="grid-item" style="background-color: #A5BD2A;">
			<i class="fas fa-phone-alt icon"></i>
			Communication devices
		  </div>
		  <div class="grid-item" style="background-color: #51AA45;">
			<i class="fas fa-tshirt icon"></i>
			Change of clothes & shoes
		  </div>
		  <div class="grid-item" style="background-color: #278869;">
			<i class="fas fa-glasses icon"></i>
			Eyeglasses & Hearing aid
		  </div>
		  <div class="grid-item" style="background-color: #185D88;">
			<i class="fas fa-pills icon"></i>
			Medications & Equipment
		  </div>
		  <div class="grid-item" style="background-color: #423385;">
			<i class="fas fa-file-medical icon"></i>
			Health information & documents
		  </div>
		</div>
	  
		<p>In any emergency, preparedness is the greatest strength we have. By equipping ourselves with the <br> right tools, knowledge, and resources, we not only protect our loved ones but also strengthen our <br> communities. <span class="text-highlight">Remember, taking a few simple steps today can make a world of difference tomorrow.</span> <br> Start building your emergency kit now—because readiness isn’t just about survival; it’s about <br> resilience and peace of mind.</p>
	</div>