package ch.ilv5.aniclo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import ch.ilv5.aniclo.model.Colour;
import ch.ilv5.aniclo.model.Places;
import ch.ilv5.aniclo.model.Size;
import ch.ilv5.aniclo.repository.ColourRepository;
import ch.ilv5.aniclo.repository.PlacesRepository;
import ch.ilv5.aniclo.repository.SizeRepository;

public class TestData {
    @Autowired
    private PlacesRepository placesRepository;
    private ColourRepository colourRepository;
    private SizeRepository sizeRepository;

    @Test
    public void testCreateReadDelete() {
        Places places1 = new Places(4107, "Ettingen", "Therwilerstrasse", 9);
        placesRepository.save(places1);

        Places places2 = new Places(4106, "Therwil", "Leuengasse", 1);
        placesRepository.save(places2);

        Places places3 = new Places(4058, "Basel", "Rebgasse", 11);
        placesRepository.save(places3);

        Places places4 = new Places(4051, "Basel", "Centralbahnstrasse", 10);
        placesRepository.save(places4);

        Colour colour1 = new Colour("Blau");
        colourRepository.save(colour1);

        Colour colour2 = new Colour("Gelb");
        colourRepository.save(colour2);

        Colour colour3 = new Colour("Rot");
        colourRepository.save(colour3);

        Colour colour4 = new Colour("Schwarz");
        colourRepository.save(colour4);

        Size size1 = new Size(42);
        sizeRepository.save(size1);

        Size size2 = new Size(44);
        sizeRepository.save(size2);

        Size size3 = new Size(46);
        sizeRepository.save(size3);

        Size size4 = new Size(48);
        sizeRepository.save(size4);
    }
}
