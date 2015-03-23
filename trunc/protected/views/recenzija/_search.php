<?php
/* @var $this RecenzijaController */
/* @var $model Recenzija */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'idRecenzija'); ?>
		<?php echo $form->textField($model,'idRecenzija'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'datumObjave'); ?>
		<?php echo $form->textField($model,'datumObjave'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Opis'); ?>
		<?php echo $form->textArea($model,'Opis',array('rows'=>6, 'cols'=>50)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Objekat_idObjekat'); ?>
		<?php echo $form->textField($model,'Objekat_idObjekat'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Korisnici_idKorisnik'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->