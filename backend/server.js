const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());


// Predefined responses for Ayurvedic wellness questions
const responses = {
  "what are the three doshas?": "Vata, Pitta, and Kapha are the three doshas. They represent the energetic principles that govern our physiology and psychology. Vata is associated with movement, Pitta with transformation, and Kapha with structure. Imbalances in these doshas can lead to health issues.",
  "how do i determine my dosha?": "Dosha determination involves observing physical and mental characteristics. Vata individuals tend to be thin and energetic, Pitta individuals are often of medium build with a fiery temperament, and Kapha individuals are typically heavier with a calm demeanor. Online quizzes and consultations with Ayurvedic practitioners can help confirm your dosha.",
  "what kind of diet does ayurveda recommend?": "Ayurvedic diets are personalized based on your dosha. Generally, it emphasizes whole, unprocessed foods, and seasonal eating. Vata types benefit from warm, grounding foods, Pitta types from cooling foods, and Kapha types from light, dry foods. Proper digestion is also a key component.",
  "what is dinacharya?": "Dinacharya refers to daily routines that promote health and balance. It involves practices like waking up early, tongue scraping, oil pulling, and regular exercise. These routines align with the natural rhythms of the day, supporting optimal physical and mental well-being.",
  "what is panchakarma?": "Panchakarma is a detoxification and rejuvenation therapy. It involves five main procedures designed to eliminate toxins and restore balance. These procedures include Vamana (emesis), Virechana (purgation), Basti (enema), Nasya (nasal administration), and Raktamokshana (bloodletting). It is typically performed under the guidance of an Ayurvedic practitioner.",
  "what is prakriti?": "Prakriti is your individual constitution, determined at birth. It represents the unique balance of Vata, Pitta, and Kapha doshas that defines your inherent nature. Understanding your Prakriti is crucial for personalized Ayurvedic recommendations.",
  "what is vikriti?": "Vikriti is your current state of dosha imbalance. It reflects how your doshas have deviated from your Prakriti due to lifestyle, diet, or environmental factors. Ayurvedic treatments aim to bring your Vikriti back into balance with your Prakriti.",
  "what is ojas?": "Ojas is the vital essence that supports immunity and overall vitality. It is the refined product of healthy digestion and represents the body's resilience. Maintaining healthy Ojas is essential for strength, energy, and well-being.",
  "what is ama?": "Ama is undigested food and toxins that accumulate in the body. It is considered a root cause of many diseases in Ayurveda. Ama clogs channels and disrupts the flow of energy, leading to imbalances.",
  "what is the concept of ritucharya?": "Ritucharya is the practice of aligning your lifestyle with seasonal changes. It involves adapting your diet, activities, and routines to maintain balance throughout the year. This helps the body adapt to environmental shifts.",
  "what is the importance of agni?": "Agni, the digestive fire, is crucial for transforming food into nutrients. Strong Agni ensures proper digestion, assimilation, and elimination. Weak Agni leads to Ama accumulation and various health problems.",
  "what are the sensory organs importance in ayurveda?": "The sensory organs are pathways for perceiving the world. Ayurveda emphasizes maintaining their health for clear perception and balanced experience. This involves practices to avoid sensory overload and promote sensory clarity.",
  "what is the ayurvedic concept of mind body connection?": "Ayurveda views the mind and body as interconnected. Mental and emotional states directly impact physical health, and vice versa. Practices like meditation and yoga are used to harmonize mind and body.",
  "what is oil pulling?": "Oil pulling involves swishing oil in the mouth to remove toxins and improve oral health. It is a simple daily practice that can enhance overall well-being.",
  "what is tongue scraping?": "Tongue scraping removes Ama from the tongue, improving taste and digestion. It is a key part of the daily Ayurvedic routine.",
  "what is the role of ghee in ayurveda?": "Ghee is clarified butter used to nourish tissues and improve digestion. It's considered a sattvic food that promotes mental clarity.",
  "what is triphala?": "Triphala is an herbal formulation used to promote bowel regularity and detoxification. It is a common and versatile Ayurvedic remedy.",
  "what is ashwagandha?": "Ashwagandha is an adaptogenic herb used to reduce stress and improve energy. It supports the nervous system and promotes overall vitality.",
  "what is turmeric's role?": "Turmeric is a spice with anti-inflammatory and antioxidant properties. It is used to support digestion and immune function.",
  "what is the purpose of swedana?": "Swedana is a sweating therapy used to eliminate toxins and relax muscles. It is often used before or after Abhyanga.",
  "what is basti?": "Basti is an enema therapy used to cleanse the colon and balance Vata dosha. It is a key part of Panchakarma.",
  "what is the use of herbal teas in ayurveda?": "Herbal teas are used to support digestion, promote relaxation, and address specific health concerns. They are a gentle and effective way to incorporate herbs into daily life.",
  "what is the importance of marma therapy?": "Marma therapy involves stimulating vital energy points to release blockages and promote healing. It is a subtle yet powerful therapy.",
  "what is the importance of the six tastes?": "The six tastes (sweet, sour, salty, bitter, pungent, astringent) are essential for balancing the doshas. Each taste has specific effects on the body and mind.",
  "how does ayurveda view processed foods?": "Ayurveda generally discourages processed foods, as they lack Prana (life force) and can create Ama. Whole, natural foods are preferred.",
  "what are sattvic foods?": "Sattvic foods are pure, light, and promote mental clarity. They include fruits, vegetables, and whole grains.",
  "what are rajasic foods?": "Rajasic foods are stimulating and can lead to restlessness. They include spicy foods, caffeine, and excessive salt.",
  "what are tamasic foods?": "Tamasic foods are heavy, dull, and can lead to lethargy. They include processed foods, meat, and leftovers.",
  "how does ayurveda view water consumption?": "Ayurveda recommends drinking warm water throughout the day to support digestion. Cold water can impair Agni.",
  "what role does spices play in ayurvedic cooking?": "Spices are used to enhance digestion, add flavor, and balance the doshas. They are an integral part of Ayurvedic cooking.",
  "what is the importance of eating seasonally?": "Eating seasonally helps the body adapt to the changing environment. It ensures that you are consuming foods that are naturally available and supportive of your dosha.",
  "how does ayurveda view exercise?": "Ayurveda recommends moderate exercise that is tailored to your dosha. Overexertion can disrupt Vata dosha.",
  "what is the importance of meditation in ayurveda?": "Meditation calms the mind, reduces stress, and promotes mental clarity. It is a key practice for maintaining balance.",
  "how does ayurveda view emotional health?": "Ayurveda recognizes the strong connection between emotions and physical health. It emphasizes addressing emotional imbalances for overall well-being.",
  "what is the importance of sleep in ayurveda?": "Adequate sleep is essential for restoring balance and rejuvenating the body. Ayurveda recommends a regular sleep schedule.",
  "how does ayurveda address stress?": "Ayurveda uses various techniques, including meditation, yoga, and herbal remedies, to manage stress and promote relaxation.",
  "what is the ayurvedic view of healthy relationships?": "Healthy relationships are viewed as supportive of overall well-being. They add to the sattvic qualities of life.",
  "what importance does sound have in ayurveda?": "Sound therapy can be used to balance the doshas. Mantras and soothing music can promote relaxation and healing.",
  "how does ayurveda address allergies?": "Ayurveda addresses allergies by strengthening Agni, reducing Ama, and balancing the doshas. Herbal remedies and dietary changes are used.",
  "how does ayurveda approach joint pain?": "Ayurveda uses therapies like Abhyanga, herbal remedies, and dietary changes to reduce inflammation and relieve joint pain.",
  "how does ayurveda help with digestive disorders?": "Ayurveda focuses on strengthening Agni, balancing the doshas, and removing Ama. Dietary changes, herbal remedies, and lifestyle adjustments are used.",
  "how does ayurveda address skin conditions?": "Ayurveda addresses skin conditions by purifying the blood, balancing Pitta dosha, and improving digestion. Herbal remedies and topical applications are used.",
  "how does ayurveda help with respiratory issues?": "Ayurveda uses herbal remedies, steam inhalation, and dietary changes to clear congestion and support respiratory health.",
  "how does ayurveda address hormonal imbalances?": "Ayurveda uses herbal remedies, dietary changes, and lifestyle adjustments to balance hormones and support endocrine function.",
  "what are some common ayurvedic oils?": "Sesame oil, coconut oil, and ghee are commonly used for massage and other therapies. They are chosen based on their properties and the dosha being addressed.",
  "what are some popular ayurvedic herbs for women's health?": "Shatavari and Ashoka are commonly used to support women's health and hormonal balance. They are valued for their rejuvenating properties.",
  "how does ayurveda view the use of spices medicinally?": "Spices are used to enhance digestion, reduce inflammation, and address specific health concerns. They are an integral part of Ayurvedic medicine.",
  "what is the role of carrier oils in ayurveda?": "Carrier oils are used to dilute essential oils and facilitate their absorption into the skin. They are chosen based on their properties and the intended purpose.",
  "how does ayurveda use aromatherapy?": "Aromatherapy is used to balance the doshas and promote emotional well-being. Essential oils are chosen based on their therapeutic properties.",
  "where can i find quality ayurvedic products?": "Quality Ayurvedic products can be found at reputable Ayurvedic pharmacies, online retailers specializing in Ayurvedic products, and from Ayurvedic practitioners. It's important to choose products from trusted sources.",

// Updated default response to use the local AI model for unknown questions
"default": (userMessage) => {
    const genericResponses = [
      "That's an interesting question! Let me think...",
      "I'm still learning about Ayurveda, but here's what I know:",
      "Hmm, I don't have a specific answer for that, but here's some general advice:",
      "I'm not entirely sure, but here's something that might help:"
    ];

    // Randomly select a generic response
    const randomResponse = genericResponses[Math.floor(Math.random() * genericResponses.length)];

    // Combine the generic response with a suggestion to ask a specific question
    return `${randomResponse} Could you provide more details or ask a more specific question about Ayurveda?`;
  }
};



// Endpoint to handle chatbot messages
app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    let botResponse = responses[userMessage] || responses.default(userMessage);
  
    res.json({ message: botResponse });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });