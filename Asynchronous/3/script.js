// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array �
// 5. Add the 'parallel' class to all the images (it has some CSS styles)

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      document.body.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage(
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Renault_Duster_Techroad%2C_Natal_%28DSC05979%29.jpg"
    );
    await wait(2);
    img.style.display = "none";

    img = await createImage(
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/BMW_M5%2C_IAA_2017%2C_Frankfurt_%281Y7A3540%29.jpg"
    );
    await wait(2);
    img.style.display = "none";

    img = await createImage(
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Hyundai_i20_N_IMG_0028.jpg"
    );
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(imgArr.map((img) => createImage(img)));
    imgs.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};

// Uncomment this to test loadNPause
// loadNPause();

// Test loadAll
loadAll([
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Renault_Duster_Techroad%2C_Natal_%28DSC05979%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/BMW_M5%2C_IAA_2017%2C_Frankfurt_%281Y7A3540%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Hyundai_i20_N_IMG_0028.jpg",
]);
