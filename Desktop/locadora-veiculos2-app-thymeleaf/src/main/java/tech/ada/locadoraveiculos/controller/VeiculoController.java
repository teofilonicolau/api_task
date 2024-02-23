package tech.ada.locadoraveiculos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import tech.ada.locadoraveiculos.model.Veiculo;
import tech.ada.locadoraveiculos.service.VeiculoService;

import java.util.List;

@Controller     //para MVC
public class VeiculoController {

    @Autowired
    private VeiculoService veiculoService;

    @GetMapping("/veiculos")
    public ModelAndView veiculos() {

        List<Veiculo> veiculos = this.veiculoService.listarTodos();

        ModelAndView modelAndView = new ModelAndView("veiculos");
        modelAndView.addObject("lista_veiculos", veiculos);

        return modelAndView;

    }

    @GetMapping("/veiculo/add")
    public String abrirTelaAddVeiculo(Model model, Veiculo veiculo) {

        model.addAttribute("veiculo", veiculo);

        return "veiculo-add";

    }

    @PostMapping("/veiculo/add")
    public String criarVeiculo(@ModelAttribute("veiculo") Veiculo veiculo,
                               BindingResult result,
                               Model model) {



        return "redirect:/veiculos";
    }

}
