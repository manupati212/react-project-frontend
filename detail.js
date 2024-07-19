$(document).ready(function() {
    $('#pMultiplierTab').on('click', function() {
        $('#tabContent').html(`
            <div>
                <label for="pMultiplierStart">P Multiplier Start:</label>
                <input type="number" id="pMultiplierStart">
                <label for="pMultiplierEnd">P Multiplier End:</label>
                <input type="number" id="pMultiplierEnd">
                <div id="soilLayers">
                    <label for="soilLayer1">Soil Layer 1:</label>
                    <input type="number" id="soilLayer1">
                </div>
                <button id="addSoilLayer">+ Add Soil Layer</button>
                <button id="savePValues">Save</button>
            </div>
        `);

        let soilLayerCount = 1;

        $('#addSoilLayer').on('click', function() {
            soilLayerCount++;
            $('#soilLayers').append(`
                <label for="soilLayer${soilLayerCount}">Soil Layer ${soilLayerCount}:</label>
                <input type="number" id="soilLayer${soilLayerCount}">
            `);
        });

        $('#savePValues').on('click', function() {
            let data = {
                pMultiplierStart: $('#pMultiplierStart').val(),
                pMultiplierEnd: $('#pMultiplierEnd').val(),
                soilLayers: []
            };
            for (let i = 1; i <= soilLayerCount; i++) {
                data.soilLayers.push($(`#soilLayer${i}`).val());
            }

            $.ajax({
                type: 'POST',
                url: '/savePValues',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(response) {
                    console.log('Data saved:', response);
                }
            });
        });
    });
});
