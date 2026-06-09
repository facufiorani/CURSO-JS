function normalizeUnits(manifest) {
    if (manifest.unit === "kg") return { ...manifest };
    return { ...manifest, weight: manifest.weight * 0.45, unit: "kg" };
    }

function validateManifest(manifest) {
    const errors = {};

    if (!manifest.hasOwnProperty("containerId")) errors.containerId = "Missing";
    else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0)
        errors.containerId = "Invalid";

    if (!manifest.hasOwnProperty("destination")) errors.destination = "Missing";
    else if (
        typeof manifest.destination !== "string" ||
        manifest.destination.trim() === ""
    )
        errors.destination = "Invalid";

    if (!manifest.hasOwnProperty("weight")) errors.weight = "Missing";
    else if (
        typeof manifest.weight !== "number" ||
        Number.isNaN(manifest.weight) ||
        manifest.weight <= 0
    )
        errors.weight = "Invalid";

    if (!manifest.hasOwnProperty("unit")) errors.unit = "Missing";
    else if (manifest.unit !== "kg" && manifest.unit !== "lb")
        errors.unit = "Invalid";

    if (!manifest.hasOwnProperty("hazmat")) errors.hazmat = "Missing";
    else if (typeof manifest.hazmat !== "boolean") errors.hazmat = "Invalid";

    return errors;
    }

    function processManifest(manifest) {
    const errors = validateManifest(manifest);

    if (Object.keys(errors).length === 0) {
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(errors);
    }
}
