import { Component, OnInit } from "@angular/core";
import { Validators, FormArray, FormControl } from "@angular/forms";
import { AdnVerifyService } from "../../shared/services/adn-verify.service";

@Component({
  selector: "app-adn-check",
  templateUrl: "./adn-check.component.html",
  styleUrls: ["./adn-check.component.scss"],
})
export class AdnCheckComponent implements OnInit {
  constructor(private verify: AdnVerifyService) {}
    ADNSecuense = new FormArray([
      new FormControl("",[ Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
    ])

  ngOnInit() {}

  onSubmit(): void {
    let adn = this.ADNSecuense.value;
    console.log({ 'ADNSecuence': adn });
    this.verify.verifyAdn({'ADNSecuence':adn}).subscribe((res) => {
      console.log(res);
    });
  }
}
